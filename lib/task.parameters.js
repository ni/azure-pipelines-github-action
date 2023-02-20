"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
class TaskParameters {
    constructor() {
        this._azureDevopsProjectUrl = core.getInput('azure-devops-project-url', { required: true });
        this._azurePipelineName = core.getInput('azure-pipeline-name', { required: true });
        this._azureDevopsToken = core.getInput('azure-devops-token', { required: true });
        this._azurePipelineVariables = core.getInput('azure-pipeline-variables', { required: false });
        this._azurePipelineParameters = core.getInput('azure-pipeline-parameters', { required: false });
        this._branch = core.getInput('branch', { required: false });
    }
    static getTaskParams() {
        if (!this.taskparams) {
            this.taskparams = new TaskParameters();
        }
        return this.taskparams;
    }
    get azureDevopsProjectUrl() {
        return this._azureDevopsProjectUrl;
    }
    get azurePipelineName() {
        return this._azurePipelineName;
    }
    get azureDevopsToken() {
        return this._azureDevopsToken;
    }
    get azurePipelineVariables() {
        return this._azurePipelineVariables;
    }
    get azurePipelineParameters() {
        if (this._azurePipelineParameters) {
            return JSON.parse(this._azurePipelineParameters);
        }
        else {
            return undefined;
        }
    }
    get branch() {
        return this._branch;
    }
}
exports.TaskParameters = TaskParameters;
