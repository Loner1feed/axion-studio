import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useTable } from "@utils/hooks";
import { ProcessService } from "@utils/services";
import { ProcessTypes } from "@utils/types";
import { Button, Card, message, Popconfirm, Space, Switch, Table } from "antd";
import { AxiosError, AxiosResponse } from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export const ProcessList: React.FC = () => {
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
    service: ProcessService.getWithParams,
  });

  // hooks
  const navigate = useNavigate();

  const deleteHandler = (id: string | undefined) => {
    if (id) {
      setLoading(true);
      ProcessService.deleteById(id)
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
      title: "Number",
      dataIndex: "number",
      key: "number",
      width: 130,
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
      render: (record: ProcessTypes) => (
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
    <Card title="How the process goes" extra={<ExtraButtons />}>
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
