import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useTable } from "@utils/hooks";
import { FaqService } from "@utils/services";
import { FaqTypes } from "@utils/types";
import { Button, Card, message, Popconfirm, Space, Switch, Table } from "antd";
import { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router";

export const FaqList = () => {
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
    service: FaqService.getWithParams,
  });

  // hooks
  const navigate = useNavigate();

  const deleteHandler = (id: string | undefined) => {
    if (id) {
      setLoading(true);
      FaqService.deleteById(id)
        .then((_: AxiosResponse) => {
          message.success("FAQ Item successfully deleted");
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
      title: "Question",
      dataIndex: "question",
      key: "question",
      width: 300,
    },

    {
      title: "Answer",
      dataIndex: "answer",
      key: "answer",
      width: 500,
    },

    {
      title: "Order",
      dataIndex: "order",
      key: "order",
      width: 200,
    },

    {
      title: "Show on front",
      dataIndex: "showOnFront",
      key: "showOnFront",
      width: 140,
      render: (record: boolean) => <Switch checked={record} disabled />,
    },

    {
      title: "Actions",
      width: 130,
      render: (record: FaqTypes) => (
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
    <Card title="FAQ" extra={<ExtraButtons />}>
      <Table
        columns={columns}
        dataSource={response.data}
        loading={loading}
        onChange={tableChangeHandler}
        scroll={{ x: 800 }}
        pagination={{
          showSizeChanger: false,
          total: response.totalCount,
          current: params.page + 1,
          pageSize: params.pageSize,
        }}
      />
    </Card>
  );
};
