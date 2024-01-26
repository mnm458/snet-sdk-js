// package: escrow
// file: state_service.proto

import * as state_service_pb from "./state_service_pb";
import { grpc } from "@improbable-eng/grpc-web";

class PaymentChannelStateService {
  static serviceName = "escrow.PaymentChannelStateService";
}

PaymentChannelStateService.GetChannelState = {
  methodName: "GetChannelState",
  service: PaymentChannelStateService,
  requestStream: false,
  responseStream: false,
  requestType: state_service_pb.ChannelStateRequest,
  responseType: state_service_pb.ChannelStateReply,
};

export { PaymentChannelStateService };

class PaymentChannelStateServiceClient {
  constructor(serviceHost, options) {
    this.serviceHost = serviceHost;
    this.options = options || {};
  }

  getChannelState(requestMessage, metadata, callback) {
    if (arguments.length === 2) {
      callback = arguments[1];
    }
    const client = grpc.unary(PaymentChannelStateService.GetChannelState, {
      request: requestMessage,
      host: this.serviceHost,
      metadata: metadata,
      transport: this.options.transport,
      debug: this.options.debug,
      onEnd: function (response) {
        if (callback) {
          if (response.status !== grpc.Code.OK) {
            const err = new Error(response.statusMessage);
            err.code = response.status;
            err.metadata = response.trailers;
            callback(err, null);
          } else {
            callback(null, response.message);
          }
        }
      },
    });
    return {
      cancel: function () {
        callback = null;
        client.close();
      },
    };
  }
}

export { PaymentChannelStateServiceClient };

class FreeCallStateService {
  static serviceName = "escrow.FreeCallStateService";
}

FreeCallStateService.GetFreeCallsAvailable = {
  methodName: "GetFreeCallsAvailable",
  service: FreeCallStateService,
  requestStream: false,
  responseStream: false,
  requestType: state_service_pb.FreeCallStateRequest,
  responseType: state_service_pb.FreeCallStateReply,
};

export { FreeCallStateService };

class FreeCallStateServiceClient {
  constructor(serviceHost, options) {
    this.serviceHost = serviceHost;
    this.options = options || {};
  }

  getFreeCallsAvailable(requestMessage, metadata, callback) {
    if (arguments.length === 2) {
      callback = arguments[1];
    }
    const client = grpc.unary(FreeCallStateService.GetFreeCallsAvailable, {
      request: requestMessage,
      host: this.serviceHost,
      metadata: metadata,
      transport: this.options.transport,
      debug: this.options.debug,
      onEnd: function (response) {
        if (callback) {
          if (response.status !== grpc.Code.OK) {
            const err = new Error(response.statusMessage);
            err.code = response.status;
            err.metadata = response.trailers;
            callback(err, null);
          } else {
            callback(null, response.message);
          }
        }
      },
    });
    return {
      cancel: function () {
        callback = null;
        client.close();
      },
    };
  }
}

export { FreeCallStateServiceClient };
