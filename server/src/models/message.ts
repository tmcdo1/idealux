export enum MessageType {
  IDEA = "IDEA",
}

export interface Message {
  type: MessageType;
}

export interface IdeaMessage extends Message {
  type: MessageType.IDEA;
  idea: string;
}
