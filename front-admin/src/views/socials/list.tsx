import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useTable } from "@utils/hooks";
import { SocialsService } from "@utils/services/socials.service";
import { SocialTypes } from "@utils/types/socials.types";
import {
  Button,
  Card,
  message,
  Popconfirm,
  Space,
  Switch,
  Table,
  Tag,
} from "antd";
import { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

export const SocialsList = () => {
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
    service: SocialsService.getWithParams,
  });

  // hooks
  const navigate = useNavigate();

  const deleteHandler = (id: string | undefined) => {
    if (id) {
      setLoading(true);
      SocialsService.deleteById(id)
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
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: 250,
    },

    {
      title: "Backdrop color",
      dataIndex: "backdropColor",
      key: "backdropColor",
      render: (record: string) => (
        <Tag style={{ color: record }} color={record}>
          Color provided
        </Tag>
      ),
      width: 150,
    },

    {
      title: "Icon name",
      dataIndex: "iconName",
      key: "iconName",
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
      render: (record: SocialTypes) => (
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
    <Card title="Our socials" extra={<ExtraButtons />}>
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
