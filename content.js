/*
 * WRETCLUSE.GG — CONTENT FILE
 * This is the ONLY file you need to edit for routine content updates.
 *
 * To publish an actual download, set downloadUrl to an HTTPS address.
 * Leave downloadUrl as "" to show "Download coming soon" instead.
 * You can add another project or macro by copying an existing {...} entry.
 * Be careful to keep the comma between entries.
 */

window.WRETCLUSE_CONTENT = {
  projects: [
    {
      category: "WORLD OF WARCRAFT / ADDON",
      type: "addon",
      title: "WretcluseUI",
      description: "A personal collection of subtle interface improvements: unit frames, nameplates, shortcuts, and a few things Blizzard almost got right.",
      detail: "Midnight · Lua addon",
      tags: ["Interface", "Quality of life", "Lua"],
      status: "In development",
      downloadUrl: ""
    },
    {
      category: "WORLD OF WARCRAFT / HOUSING",
      type: "housing",
      title: "An Orcish Home",
      description: "An evolving collection of orc-inspired spaces, build experiments, and eventually housing blueprints to share.",
      detail: "Housing · Gallery & blueprints",
      tags: ["Orcish", "Building", "Design"],
      status: "Taking shape",
      downloadUrl: ""
    },
    {
      category: "MINECRAFT / SIDE QUEST",
      type: "minecraft",
      title: "Beyond Azeroth",
      description: "An occasional place for Minecraft builds, HoloPrint schematics, and world downloads when there's something worth sharing.",
      detail: "Minecraft Bedrock · Experiments",
      tags: ["HoloPrint", "Worlds"],
      status: "Coming later",
      downloadUrl: ""
    }
  ],

  macros: [
    {
      title: "Target your focus",
      category: "TARGETING",
      description: "Switch to your focus target when it exists and is alive.",
      code: `/target [@focus,exists,nodead]`
    },
    {
      title: "Focus your mouseover",
      category: "TARGETING",
      description: "Set your focus to the living unit beneath your cursor.",
      code: `/focus [@mouseover,exists,nodead]`
    },
    {
      title: "Clear your focus",
      category: "UTILITY",
      description: "Remove your current focus without opening another menu.",
      code: `/clearfocus`
    }
  ]
};
