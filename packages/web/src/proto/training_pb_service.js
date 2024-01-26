// package: training
// file: singnet/snet-daemon/training/training.proto

import * as singnet_snet_daemon_training_training_pb from "./training_pb";
import { grpc } from "@improbable-eng/grpc-web";

class Model {
  static serviceName = "training.Model";

  static create_model = {
    methodName: "create_model",
    service: Model,
    requestStream: false,
    responseStream: false,
    requestType: singnet_snet_daemon_training_training_pb.CreateModelRequest,
    responseType: singnet_snet_daemon_training_training_pb.ModelDetailsResponse,
  };

  static delete_model = {
    methodName: "delete_model",
    service: Model,
    requestStream: false,
    responseStream: false,
    requestType: singnet_snet_daemon_training_training_pb.UpdateModelRequest,
    responseType: singnet_snet_daemon_training_training_pb.ModelDetailsResponse,
  };

  static get_model_status = {
    methodName: "get_model_status",
    service: Model,
    requestStream: false,
    responseStream: false,
    requestType: singnet_snet_daemon_training_training_pb.ModelDetailsRequest,
    responseType: singnet_snet_daemon_training_training_pb.ModelDetailsResponse,
  };

  static update_model_access = {
    methodName: "update_model_access",
    service: Model,
    requestStream: false,
    responseStream: false,
    requestType: singnet_snet_daemon_training_training_pb.UpdateModelRequest,
    responseType: singnet_snet_daemon_training_training_pb.ModelDetailsResponse,
  };

  static get_all_models = {
    methodName: "get_all_models",
    service: Model,
    requestStream: false,
    responseStream: false,
    requestType:
      singnet_snet_daemon_training_training_pb.AccessibleModelsRequest,
    responseType:
      singnet_snet_daemon_training_training_pb.AccessibleModelsResponse,
  };
}

export { Model };

class ModelClient {
  constructor(serviceHost, options) {
    this.serviceHost = serviceHost;
    this.options = options || {};
  }

  create_model(requestMessage, metadata, callback) {
    if (arguments.length === 2) {
      callback = arguments[1];
    }
    const client = grpc.unary(Model.create_model, {
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

  delete_model(requestMessage, metadata, callback) {
    if (arguments.length === 2) {
      callback = arguments[1];
    }
    const client = grpc.unary(Model.delete_model, {
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

  get_model_status(requestMessage, metadata, callback) {
    if (arguments.length === 2) {
      callback = arguments[1];
    }
    const client = grpc.unary(Model.get_model_status, {
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

  update_model_access(requestMessage, metadata, callback) {
    if (arguments.length === 2) {
      callback = arguments[1];
    }
    const client = grpc.unary(Model.update_model_access, {
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

  get_all_models(requestMessage, metadata, callback) {
    if (arguments.length === 2) {
      callback = arguments[1];
    }
    const client = grpc.unary(
      Model.get_all_models,

      {
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
      }
    );
    return {
      cancel: () => {
        callback = null;
        client.close();
      },
    };
  }
}

export { ModelClient };
//MHKCHANGED
