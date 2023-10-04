import { appIdAction } from '@/utils/actions';
import { Button, CardBody, Input } from '@nextui-org/react';

function CardFormBody() {
  return (
    <CardBody className="overflow-hidden p-0">
      <form
        className="flex h-full w-full items-center justify-center gap-2"
        action={appIdAction}
      >
        <Input
          type="text"
          name="id"
          radius="sm"
          placeholder="Enter App ID"
          variant="bordered"
        />
        <Button
          type="submit"
          className="rounded-lg text-teal-500"
          variant="ghost"
        >
          Find App
        </Button>
      </form>
    </CardBody>
  );
}

export default CardFormBody;
