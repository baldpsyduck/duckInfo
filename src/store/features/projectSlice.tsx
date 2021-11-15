import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { members } from "types/project";
import { branch } from "types/project";
import { project as projectProps } from "types/project";

interface Project extends projectProps {}

const initialState: Project = {
  id: "",
  name: "",
  description: "",
  likes: 0,
  dislikes: 0,
  watches: 0,
  stars: 0,
  startAt: "0",
  endAt: "0",
  members: [{ role: "", username: "" }],
  projectTree: [],
  tags: [],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProject: (state, action: PayloadAction<projectProps>) => {
      state.id = action.payload.id;
      state.comments = action.payload.comments;
      state.description = action.payload.description;
      state.dislikes = action.payload.dislikes;
      state.endAt = action.payload.endAt;
      state.golry = action.payload.golry;
      state.likes = action.payload.likes;
      state.links = action.payload.links;
      state.members = action.payload.members;
      state.name = action.payload.name;
      state.projectTree = action.payload.projectTree;
      state.stars = action.payload.stars;
      state.startAt = action.payload.startAt;
      state.tags = action.payload.tags;
      state.watches = action.payload.watches;
    },

    setMem: (state, action: PayloadAction<members>) => {
      state.members = action.payload;
    },

    pushTree: (state, action: PayloadAction<branch>) => {
      state.projectTree.push(action.payload);
    },

    delTreeNode: (state, action: PayloadAction<number>) => {
      state.projectTree.splice(action.payload, 1);
    },

    setTree: (
      state,
      action: PayloadAction<{ title?: string; date?: string; num: number }>
    ) => {
      const { title, date, num } = action.payload;
      date && (state.projectTree[num].date = date);
      title && (state.projectTree[num].title = title);
    },

    clearTree: (state) => {
      state.projectTree = [];
    },

    pushChild: (
      state,
      action: PayloadAction<{
        seq: number;
        content: { title: string; key: string; order?: number; children: [] };
      }>
    ) => {
      state.projectTree[action.payload.seq].children?.push(
        action.payload.content
      );
    },

    setKey: (state, action: PayloadAction<number>) => {
      state.projectTree[action.payload].key = `${action.payload}`;
    },

    delChild: (state, action: PayloadAction<Array<number>>) => {
      const num = action.payload;
      state.projectTree[num[0]].children.splice(num[1], 1);
    },

    setChildKey: (state, action: PayloadAction<Array<number>>) => {
      const num = action.payload;
      if (state.projectTree[num[0]]?.children[num[1]])
        state.projectTree[num[0]].children[num[1]].key = `${num[0]}-${num[1]}`;
    },

    setChild: (
      state,
      action: PayloadAction<{ num: Array<number>; content: string }>
    ) => {
      const { num, content } = action.payload;
      content &&
        state.projectTree[num[0]] &&
        (state.projectTree[num[0]].children[num[1]].title = content);
    },

    pushTags: (state, action: PayloadAction<string>) => {
      state.tags.push(action.payload);
    },

    delTags: (state, action: PayloadAction<string>) => {
      state.tags.splice(state.tags.indexOf(action.payload), 1);
    },

    setTags: (state, action: PayloadAction<string[]>) => {
      state.tags = action.payload;
    },
  },
});

export const {
  setMem,
  pushTree,
  clearTree,
  delTreeNode,
  pushChild,
  setKey,
  delChild,
  setChildKey,
  setTree,
  setChild,
  pushTags,
  delTags,
  setTags,
} = projectSlice.actions;
export const project = (state: RootState) => state.project;
export default projectSlice.reducer;
