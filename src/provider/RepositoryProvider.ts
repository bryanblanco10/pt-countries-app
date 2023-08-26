import BaseModuleRepositoryInterface from "@/repositories/interfaces/BaseModuleRepositoryInterface";
import { Repository } from "./types";

const bind = (repositoryName: string, Interface: Repository) => {
  return {
    ...Object.keys(Interface).reduce((prev, method) => {
      const resolveableMethod = async (...args: any) => {
        const repository = await import(`../repositories/${repositoryName}.ts`);
        return repository.default[method](...args);
      };
      return { ...prev, [method]: resolveableMethod };
    }, {}),
  };
};

export default {
  countryRepository: bind("CountryRepository", BaseModuleRepositoryInterface),
};
