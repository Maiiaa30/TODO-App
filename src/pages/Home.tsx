import { useEffect, useState } from "react";
import { TodoApi, type ITodo } from "../shared/services/api/TodoAPI";
import { InputAdd } from "../components/InputAdd";
import { List } from "../components/List";
import { TodoItem } from "../components/TodoItem";
import { PageLayout } from "../shared/services/api/layout/page-layout/PageLayout";

export const Home = () => {
  const [list, setList] = useState<ITodo[]>([]);

  useEffect(() => {
    TodoApi.getAll().then((data) => setList(data));
  }, []);

  const handleAdd = (value: string) => {
    TodoApi.create({ label: value, complete: false }).then((data) =>
      setList([...list, data])
    );
  };

  const handleComplete = (id: string) => {
    TodoApi.updateById(id, { complete: true }).then(() => {
      setList([
        ...list.map((item) => ({
          ...item,
          complete: item.id === id ? true : item.complete,
        })),
      ]);
    });
  };

  const handleRemove = (id: string) => {
    TodoApi.deleteById(id).then(() => {
      setList([...list.filter((item) => item.id !== id)]);
    });
  };

  return (
    <PageLayout title="TODO List">
      <InputAdd onAdd={handleAdd} />

      <List>
        {list.map((listItem) => (
          <TodoItem
            key={listItem.id}
            id={listItem.id}
            label={listItem.label}
            complete={listItem.complete}
            OnComplete={() => handleComplete(listItem.id)}
            OnRemove={() => handleRemove(listItem.id)}
          />
        ))}
      </List>
    </PageLayout>
  );
};
