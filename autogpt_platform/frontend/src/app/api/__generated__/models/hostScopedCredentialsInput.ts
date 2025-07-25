/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * AutoGPT Agent Server
 * This server is used to execute agents that are created by the AutoGPT system.
 * OpenAPI spec version: 0.1
 */
import type { HostScopedCredentialsInputTitle } from "./hostScopedCredentialsInputTitle";
import type { HostScopedCredentialsInputHeaders } from "./hostScopedCredentialsInputHeaders";

export interface HostScopedCredentialsInput {
  id?: string;
  provider: string;
  title?: HostScopedCredentialsInputTitle;
  type?: "host_scoped";
  /** The host/URI pattern to match against request URLs */
  host: string;
  /** Key-value header map to add to matching requests */
  headers?: HostScopedCredentialsInputHeaders;
}
