import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useTable } from "@utils/hooks";
import { TechnologiesService } from "@utils/services/technologies.service";
import { TechnologyTypes } from "@utils/types";
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
import React from "react";
import { useNavigate } from "react-router";

export const TechnologiesList: React.FC = () => {
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
    service: TechnologiesService.getWithParams,
  });

  // hooks
  const navigate = useNavigate();

  const deleteHandler = (id: string | undefined) => {
    if (id) {
      setLoading(true);
      TechnologiesService.deleteById(id)
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
      title: "Paragraph",
      dataIndex: "paragraph",
      key: "paragraph",
    },

    {
      title: "Icon name",
      dataIndex: "iconName",
      key: "iconName",
      width: 130,
    },

    {
      title: "href",
      dataIndex: "href",
      key: "href",
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
      title: "Show on front",
      dataIndex: "showOnFront",
      key: "showOnFront",
      width: 140,
      render: (record: boolean) => <Switch checked={record} disabled />,
    },

    {
      title: "Actions",
      width: 130,
      render: (record: TechnologyTypes) => (
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
    <Card title="Technologies we use" extra={<ExtraButtons />}>
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
