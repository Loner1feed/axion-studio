import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useTable } from "@utils/hooks";
import { FeedbackService } from "@utils/services";
import { FeedbackTypes } from "@utils/types";
import { Button, Card, message, Popconfirm, Space, Table, Tag } from "antd";
import { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

export const FeedbackList = () => {
  // custom hooks
  const {
    tableChangeHandler,
    setLoading,
    refreshHandler,
    loading,
    response,
    ExtraButtons,
    params,
  } = useTable({
    service: FeedbackService.getWithParams,
  });

  // hooks
  const navigate = useNavigate();

  const deleteHandler = (id: string | undefined) => {
    if (id) {
      setLoading(true);
      FeedbackService.deleteById(id)
        .then((_: AxiosResponse) => {
          message.success("Project Type successfully deleted");
        })
        .catch((e: AxiosError) => {
          message.error(e.message);
        })
        .finally(() => {
          setLoading(false);
          refreshHandler();
        });
    }
  };

  const columns = [
    {
      title: "Contacted",
      dataIndex: "contacted",
      key: "contacted",
      width: 200,
      render: (record: boolean) => (
        <Tag color={record ? "green" : "red"}>{record ? "Yes" : "No"}</Tag>
      ),
    },

    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 200,
    },

    {
      title: "Surname",
      dataIndex: "surname",
      key: "surname",
      width: 200,
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 200,
    },

    {
      title: "Actions",
      width: 130,
      render: (record: FeedbackTypes) => (
        <Space>
          <Button
            type="primary"
            icon={<EditOutlined />}
            size="large"
            onClick={() => navigate(`edit/${record._id}/`)}
          />
          <Popconfirm
            title="Are you sure you want to delete this item?"
            onConfirm={() => deleteHandler(record._id)}
            okText="Yes"
            cancelText="No"
            placement="topLeft"
          >
            <Button
              danger
              type="default"
              icon={<DeleteOutlined />}
              size="large"
            />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Card title="Our advantages" extra={<ExtraButtons />}>
      <Table
        columns={columns}
        dataSource={response.data}
        loading={loading}
        // @ts-ignore
        onChange={tableChangeHandler}
        scroll={{ x: 800 }}
        pagination={{
          showSizeChanger: false,
          total: response.totalCount,
          current: params.page + 1,
          pageSize: params.pageSize,
        }}
        expandable={{
          expandedRowRender: (record: FeedbackTypes) => (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gridGap: "20px",
              }}
            >
              <p
                style={{ margin: 0, display: "flex", flexDirection: "column" }}
              >
                <span style={{ color: "red", marginBottom: "15px" }}>
                  Message:
                </span>
                {record.message || "-"}
              </p>

              <p
                style={{ margin: 0, display: "flex", flexDirection: "column" }}
              >
                <span style={{ color: "red", marginBottom: "15px" }}>
                  Additional info:
                </span>
                {record.addInfo || "-"}
              </p>
            </div>
          ),
        }}
      />
    </Card>
  );
};
