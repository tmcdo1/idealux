import type { Message } from "@models/message";

export const serializeMessage = (message: Message) => {
  return JSON.stringify(message);
};

export const deserializeMessage = (data: string): Message => {
  return JSON.parse(data);
};
