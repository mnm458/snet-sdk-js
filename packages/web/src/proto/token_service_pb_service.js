// package: escrow
// file: token_service.proto

import * as token_service_pb from "./token_service_pb";
import { grpc } from "@improbable-eng/grpc-web";

class TokenService {
  static serviceName = "escrow.TokenService";
}

TokenService.GetToken = {
  methodName: "GetToken",
  service: TokenService,
  requestStream: false,
  responseStream: false,
  requestType: token_service_pb.TokenRequest,
  responseType: token_service_pb.TokenReply,
};

export { TokenService };

class TokenServiceClient {
  constructor(serviceHost, options) {
    this.serviceHost = serviceHost;
    this.options = options || {};
  }

  getToken(requestMessage, metadata, callback) {
    if (arguments.length === 2) {
      callback = arguments[1];
    }
    const client = grpc.unary(TokenService.GetToken, {
      request: requestMessage,
      host: this.serviceHost,
      metadata: metadata,
      transport: this.options.transport,
      debug: this.options.debug,
      onEnd: (response) => {
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
      cancel: () => {
        callback = null;
        client.close();
      },
    };
  }
}

export { TokenServiceClient };
