"use strict";
/**
 * Provider exports and registration
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderFactory = exports.ProviderDetector = exports.VertexAIProvider = exports.OpenAIProvider = exports.OllamaProvider = exports.AnthropicProvider = void 0;
exports.registerAllProviders = registerAllProviders;
exports.getProviderStatus = getProviderStatus;
const provider_factory_1 = require("../provider-factory");
const anthropic_provider_1 = require("./anthropic-provider");
const ollama_provider_1 = require("./ollama-provider");
const openai_provider_1 = require("./openai-provider");
const vertexai_provider_1 = require("./vertexai-provider");
// Provider implementations
var anthropic_provider_2 = require("./anthropic-provider");
Object.defineProperty(exports, "AnthropicProvider", { enumerable: true, get: function () { return anthropic_provider_2.AnthropicProvider; } });
var ollama_provider_2 = require("./ollama-provider");
Object.defineProperty(exports, "OllamaProvider", { enumerable: true, get: function () { return ollama_provider_2.OllamaProvider; } });
var openai_provider_2 = require("./openai-provider");
Object.defineProperty(exports, "OpenAIProvider", { enumerable: true, get: function () { return openai_provider_2.OpenAIProvider; } });
var vertexai_provider_2 = require("./vertexai-provider");
Object.defineProperty(exports, "VertexAIProvider", { enumerable: true, get: function () { return vertexai_provider_2.VertexAIProvider; } });
// Re-export factory and detector
var provider_factory_2 = require("../provider-factory");
Object.defineProperty(exports, "ProviderDetector", { enumerable: true, get: function () { return provider_factory_2.ProviderDetector; } });
Object.defineProperty(exports, "ProviderFactory", { enumerable: true, get: function () { return provider_factory_2.ProviderFactory; } });
/**
 * Initialize and register all available providers
 */
function registerAllProviders() {
    // Import and register providers dynamically to avoid import errors
    // when optional dependencies are not installed
    // Register OpenAI provider if available
    try {
        provider_factory_1.ProviderFactory.registerProvider('openai', new openai_provider_1.OpenAIProvider());
    }
    catch (error) {
        // OpenAI provider not available
    }
    // Register Anthropic provider if available
    try {
        provider_factory_1.ProviderFactory.registerProvider('anthropic', new anthropic_provider_1.AnthropicProvider());
    }
    catch (error) {
        // Anthropic provider not available
    }
    // Register Vertex AI provider if available
    try {
        provider_factory_1.ProviderFactory.registerProvider('vertexai', new vertexai_provider_1.VertexAIProvider());
    }
    catch (error) {
        // Vertex AI provider not available
    }
    // Register Ollama provider if available
    try {
        provider_factory_1.ProviderFactory.registerProvider('ollama', new ollama_provider_1.OllamaProvider());
    }
    catch (error) {
        // Ollama provider not available
    }
}
/**
 * Get provider registration status and available models
 */
function getProviderStatus() {
    const status = {
        registered: provider_factory_1.ProviderFactory.getRegisteredProviders(),
        available: provider_factory_1.ProviderFactory.getAvailableProviders(),
        recommendations: {
            openai: (() => {
                try {
                    return openai_provider_1.OpenAIProvider.getRecommendedModels();
                }
                catch {
                    return null;
                }
            })(),
            anthropic: (() => {
                try {
                    return anthropic_provider_1.AnthropicProvider.getRecommendedModels();
                }
                catch {
                    return null;
                }
            })(),
            vertexai: (() => {
                try {
                    return vertexai_provider_1.VertexAIProvider.getRecommendedModels();
                }
                catch {
                    return null;
                }
            })(),
            ollama: (() => {
                try {
                    return ollama_provider_1.OllamaProvider.getRecommendedModels();
                }
                catch {
                    return null;
                }
            })(),
        },
    };
    return status;
}
// Auto-register providers when this module is imported
registerAllProviders();
