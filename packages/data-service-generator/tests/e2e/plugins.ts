import { PluginInstallation } from "@amplication/code-gen-types";

export const postgres: PluginInstallation[] = [
  {
    id: "postgres-id",
    pluginId: "db-postgres",
    npm: "@amplication/plugin-db-postgres",
    enabled: true,
    version: "latest",
  },
];

export const mongo: PluginInstallation[] = [
  {
    id: "mongo-id",
    pluginId: "db-mongo",
    npm: "@amplication/plugin-db-mongo",
    enabled: true,
    version: "latest",
  },
];

export const mysql: PluginInstallation[] = [
  {
    id: "mysql-id",
    pluginId: "db-mysql",
    npm: "@amplication/plugin-db-mysql",
    enabled: true,
    version: "latest",
  },
];

export const basicAuth: PluginInstallation[] = [
  {
    id: "auth-core-id",
    pluginId: "auth-core",
    npm: "@amplication/plugin-auth-core",
    enabled: true,
    version: "2.0.0-beta.1",
  },
  {
    id: "auth-basic-id",
    pluginId: "auth-basic",
    npm: "@amplication/plugin-auth-basic",
    enabled: true,
    version: "latest",
  },
];
