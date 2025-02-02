// @generated by protoc-gen-es v1.6.0 with parameter "target=js"
// @generated from file state_service.proto (package escrow, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * ChanelStateRequest is a request for channel state.
 *
 * @generated from message escrow.ChannelStateRequest
 */
export const ChannelStateRequest = proto3.makeMessageType(
  "escrow.ChannelStateRequest",
  () => [
    { no: 1, name: "channel_id", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "signature", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "current_block", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * ChannelStateReply message contains a latest channel state. current_nonce and
 * current_value fields can be different from ones stored in the blockchain if
 * server started withdrawing funds froms channel but transaction is still not
 * finished.
 *
 * @generated from message escrow.ChannelStateReply
 */
export const ChannelStateReply = proto3.makeMessageType(
  "escrow.ChannelStateReply",
  () => [
    { no: 1, name: "current_nonce", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "current_signed_amount", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "current_signature", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "old_nonce_signed_amount", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "old_nonce_signature", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 6, name: "planned_amount", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 7, name: "used_amount", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * @generated from message escrow.FreeCallStateRequest
 */
export const FreeCallStateRequest = proto3.makeMessageType(
  "escrow.FreeCallStateRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "token_for_free_call", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "token_expiry_date_block", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "signature", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "current_block", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * @generated from message escrow.FreeCallStateReply
 */
export const FreeCallStateReply = proto3.makeMessageType(
  "escrow.FreeCallStateReply",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "free_calls_available", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

