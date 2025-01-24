import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useTable } from "@utils/hooks";
import { AdvantagesService } from "@utils/services";
import { AdvantageTypes } from "@utils/types";
import { Button, Card, message, Popconfirm, Space, Table } from "antd";
import { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

export const AdvantagesList = () => {
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
    service: AdvantagesService.getWithParams,
  });

  // hooks
  const navigate = useNavigate();

  const deleteHandler = (id: string | undefined) => {
    if (id) {
      setLoading(true);
      AdvantagesService.deleteById(id)
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
      title: "Heading",
      dataIndex: "heading",
      key: "heading",
      width: 250,
    },

    {
      title: "Subheading",
      dataIndex: "subheading",
      key: "subheading",
      width: 300,
    },

    {
      title: "Paragraph",
      dataIndex: "paragraph",
      key: "paragraph",
    },

    {
      title: "Video URL",
      dataIndex: "videoUrl",
      key: "videoUrl",
      width: 200,
      render: (record: string) => (
        <Button href={record} target="_blank" type="primary">
          Link
        </Button>
      ),
    },

    {
      title: "Actions",
      width: 130,
      render: (record: AdvantageTypes) => (
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
