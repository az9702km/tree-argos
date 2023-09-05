import { defineStore } from "pinia";
import { ProjectInfo } from "../types/projects";

export const useProjectsStore = defineStore("projects", {
  state: () => {
    return {
      projects: [] as ProjectInfo[],
    };
  },
  getters: {
    getProjects: (state) => state.projects,
  },
  actions: {
    fetchProjects(projects: ProjectInfo[]) {
      this.projects = projects;
    },
  },
});
