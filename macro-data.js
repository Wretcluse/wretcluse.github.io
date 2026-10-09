// Generated from the uploaded account-wide macros-cache.txt. Commands preserved; only line endings normalized.
// To refresh, regenerate from a backup. Avoid editing the commands unless intentional.
window.WRETCLUSE_MACROS = [
  {
    "id": "0000000000000137",
    "name": "000 - CD Manager",
    "category": "General / Utility",
    "icon": "134400",
    "code": "/run CooldownViewerSettings:SetShown(not CooldownViewerSettings:IsShown())"
  },
  {
    "id": "0000000000000138",
    "name": "000 - Macro",
    "category": "General / Utility",
    "icon": "134400",
    "code": "/run if MacroFrame:IsShown() then HideUIPanel(MacroFrame) else ShowUIPanel(MacroFrame) end"
  },
  {
    "id": "0000000000000134",
    "name": "000 - RareTarget",
    "category": "General / Utility",
    "icon": "134400",
    "code": "#showtooltip Surge Forward\n/tar Aeonaxx\n/cast Surge Forward\n/run print(GetBindingAction(\"F10\"))\n/changeactionbar [actionbar:2]1\n/changeactionbar [actionbar:3]1"
  },
  {
    "id": "0000000000000122",
    "name": "0000001 - 01 AFK",
    "category": "General / Utility",
    "icon": "134400",
    "code": "#showtooltip\n/click ExtraActionButton1"
  },
  {
    "id": "0000000000000124",
    "name": "0000001 - RIO SP",
    "category": "General / Utility",
    "icon": "134400",
    "code": "/run EditModeManagerFrame:SelectLayout(3)"
  },
  {
    "id": "0000000000000126",
    "name": "0000001 - UI Pof",
    "category": "General / Utility",
    "icon": "134400",
    "code": "/run EditModeManagerFrame:SelectLayout(3)"
  },
  {
    "id": "00000000000000EF",
    "name": "0000001 KeepR",
    "category": "General / Utility",
    "icon": "134400",
    "code": "/script MultiBarBottomLeftButton3:ClearAllPoints()\n/script MultiBarBottomLeftButton3:SetPoint(\"TOPLEFT\", MainMenuBar, 96,0)"
  },
  {
    "id": "00000000000000D3",
    "name": "000001 - AB Page",
    "category": "General / Utility",
    "icon": "134400",
    "code": "/changeactionbar [actionbar:2]3"
  },
  {
    "id": "00000000000000D2",
    "name": "000001 CVar find",
    "category": "General / Utility",
    "icon": "INV_MISC_QUESTIONMARK",
    "code": "/run local function(k, v) print(\"CVar\", k, \"changed to\", v) end)"
  },
  {
    "id": "000000000000005B",
    "name": "00001",
    "category": "General / Utility",
    "icon": "INV_MISC_QUESTIONMARK",
    "code": "/run SetCVar('nameplateSelfBottomInset', 0.2) SetCVar('nameplateTopBottomInset', 0.3)"
  },
  {
    "id": "0000000000000051",
    "name": "00001 NameBase",
    "category": "General / Utility",
    "icon": "134400",
    "code": "/run SetCVar(\"nameplateOtherAtBase\",2);"
  },
  {
    "id": "0000000000000123",
    "name": "00001 quest",
    "category": "General / Utility",
    "icon": "134400",
    "code": "/run print(C_QuestLog.IsQuestFlaggedCompleted(72512))"
  },
  {
    "id": "00000000000000E0",
    "name": "00002 HIDE PET N",
    "category": "General / Utility",
    "icon": "134400",
    "code": "/run SetCVar('UnitNameNPC', 1) "
  },
  {
    "id": "000000000000012A",
    "name": "001 - A Legendar",
    "category": "General / Utility",
    "icon": "134400",
    "code": "/run print(\"Currently Available:\")local n={\"Abu'Gar\",\"Nat Pagle\",\"Oculeth\",\"Time-Warped Fisher\",\"Chen Stormstout\",\"Elder Clearwater\",\"Wrathion\"}for i,v in pairs({0,4,25,35,557,584,624})do if C_TaskQuest.IsActive(70075+v)then print(\"-\",n[i])end end"
  },
  {
    "id": "0000000000000074",
    "name": "001 - Just One M",
    "category": "General / Utility",
    "icon": "134400",
    "code": "/run a={1,0,-1,-4,-3,-2,4,3,2,7,6,5,10,9,8,13,12,11}x=0 f=function(p)x=x+1 return \"\\124cFF\"..(C_QuestLog.IsQuestFlaggedCompleted(79600+a[x])and\"00FF00\"or\"FF0000\")..p..\"\\124r \"end for i=1,6 do print(f(1)..f(2)..f(3)..GetAchievementCriteriaInfo(19792,i))end"
  },
  {
    "id": "000000000000010B",
    "name": "All Bar4 UNUSED",
    "category": "General / Utility",
    "icon": "525134",
    "code": "/run r=SecureCmdOptionParse(\"[mod:ctrl]/mdt,[button:1]/mdt,[button:2]/mdt\") DEFAULT_CHAT_FRAME.editBox:SetText(r) ChatEdit_SendText(DEFAULT_CHAT_FRAME.editBox, 0)"
  },
  {
    "id": "0000000000000136",
    "name": "All Bar4Button 1",
    "category": "General / Utility",
    "icon": "134400",
    "code": "#showtooltip\n/use [mod:shift] Flight Master's Whistle; [nomod] Whispers of Rai'Vosh; [mod:ctrl] Warband Bank Distance Inhibitor; [mod:alt] Warband Map to Everywhere All At Once"
  },
  {
    "id": "0000000000000046",
    "name": "All Bar4Button04",
    "category": "General / Utility",
    "icon": "134400",
    "code": "#showtooltip\n/cast [mod:shift] !Grand Expedition Yak\n/cast [mod:ctrl] !Mighty Caravan Brutosaur\n/cast [mod:alt] !Sandstone Drake\n/cast [btn:2] Switch Flight Style\n/cast [nomod, swimming] Brinedeep Bottom-Feeder; Tomb Stalker\n/changeactionbar [mod:alt] 1"
  },
  {
    "id": "00000000000000E4",
    "name": "All Bar4Button05",
    "category": "General / Utility",
    "icon": "134400",
    "code": "#showtooltip\n/cast [mod:alt] Anglers Fishing Raft\n/cast [mod:shift] !Undercurrent\n/use [mod:ctrl] Crate of Bobbers: Can of Worms\n/use [nomod, swimming][mounted] !Fishing Journal; Fishing"
  },
  {
    "id": "00000000000000E3",
    "name": "All Bar4Button06",
    "category": "General / Utility",
    "icon": "134400",
    "code": "#showtooltip\n/cast [mod:ctrl] Cooking Fire\n/summonpet [mod:shift, nomounted, nostealth] Pierre\n/cast [mod:alt, nomounted] Brazier of Awakening;Cooking"
  },
  {
    "id": "000000000000001F",
    "name": "All Bar4Button07",
    "category": "General / Utility",
    "icon": "134400",
    "code": "#showtooltip [mod:shift] Dalaran Hearthstone;[mod:ctrl]Garrison Hearthstone;The Innkeeper's Daughter\n/focus [nomod,@mouseover] \n/use [nomod,btn:2]The Innkeeper's Daughter\n/use [mod:shift,btn:2]Dalaran Hearthstone\n/use [mod:ctrl,btn:2]Garrison Hearthstone"
  },
  {
    "id": "0000000000000025",
    "name": "All Bar4Button08",
    "category": "General / Utility",
    "icon": "133457",
    "code": "#showtooltip [mod:ctrl] Trader's Gilded Brutosaur; Katy's Stampwhistle\n/cleartarget\n/cast [mod:ctrl] !Trader's Gilded Brutosaur\n/use [button:2, nomod]  Katy's Stampwhistle\n/changeactionbar [actionbar:2]1\n/changeactionbar [actionbar:3]1"
  },
  {
    "id": "000000000000012E",
    "name": "All Bar4ProfBlac",
    "category": "General / Utility",
    "icon": "134400",
    "code": "#showtooltip\n/use [nomod] Blacksmithing\n/use [nomounted, mod:alt] Thermal Anvil"
  },
  {
    "id": "000000000000011B",
    "name": "All Bar4ProfEnch",
    "category": "General / Utility",
    "icon": "134400",
    "code": "#showtooltip [nomod] Enchanting; Disenchant\n/use [nomod] Enchanting\n/use [mod:alt, btn:2] Disenchant\n/use [mod:ctrl, btn:2] Disenchant\n/use [mod:shift, btn:2] Disenchant"
  },
  {
    "id": "00000000000000F0",
    "name": "All Bar4ProfEngi",
    "category": "General / Utility",
    "icon": "134400",
    "code": "#showtooltip [mod:alt] Ultimate Gnomish Army Knife; Engineering\n/use [nomod] Engineering\n/use [mod:alt, btn:2] Ultimate Gnomish Army Knife\n/use [mod:alt] Ultimate Gnomish Army Knife\n/changeactionbar [mod:ctrl][actionbar:2]2"
  },
  {
    "id": "0000000000000135",
    "name": "All Bar4ProfHerb",
    "category": "General / Utility",
    "icon": "134400",
    "code": "#showtooltip\n/use [nomod] Herbalism Journal; Sky Golem"
  },
  {
    "id": "000000000000012F",
    "name": "All Bar4ProfMini",
    "category": "General / Utility",
    "icon": "134400",
    "code": "#showtooltip\n/use [nomod] Mining Journal"
  },
  {
    "id": "0000000000000132",
    "name": "All Bar4ProfScri",
    "category": "General / Utility",
    "icon": "134400",
    "code": "#showtooltip\n/cast Inscription\n/target Samantha Scarlet\n/target Nicholas Mitrik\n/target Professor Thaddeus"
  },
  {
    "id": "0000000000000133",
    "name": "All Bar4ProfTail",
    "category": "General / Utility",
    "icon": "134400",
    "code": "#showtooltip Tailoring\n/use [nomod] Tailoring"
  },
  {
    "id": "0000000000000068",
    "name": "All HP",
    "category": "General / Utility",
    "icon": "538745",
    "code": "/#showtooltip 538745\n/use [modifier:alt] Spiritual Healing Potion\n/cast Healthstone\n#showtooltip Healthstone"
  },
  {
    "id": "000000000000009F",
    "name": "All Mount",
    "category": "General / Utility",
    "icon": "1338908",
    "code": "#showtooltip\n/cast [mod:alt, flyable] !Sandstone Drake\n/cast [mod:alt, noflyable] !Highland Drake\n/cast [nomod, swimming] Brinedeep Bottom-Feeder; Llothien Prowler"
  },
  {
    "id": "000000000000003C",
    "name": "All Mount 003",
    "category": "General / Utility",
    "icon": "236552",
    "code": "#showtooltip Magic Broom\n/cast [nomounted] Magic Broom\n/dismount [mounted]"
  },
  {
    "id": "0000000000000121",
    "name": "All Phial",
    "category": "General / Utility",
    "icon": "134400",
    "code": "#showtooltip\n/use [nomod, btn:2] Phial of Tepid Versatility"
  },
  {
    "id": "0000000000000072",
    "name": "All Profile Chan",
    "category": "General / Utility",
    "icon": "134400",
    "code": "/run local a,b=2,3 EditModeManagerFrame:SelectLayout(C_EditMode.GetLayouts().activeLayout==a and b or a)"
  },
  {
    "id": "00000000000000EE",
    "name": "All Shapeshift M",
    "category": "General / Utility",
    "icon": "134400",
    "code": "/run local a = GetShapeshiftForm() print('you are in stance: ',a)"
  },
  {
    "id": "00000000000000F2",
    "name": "All ShStone MH",
    "category": "General / Utility",
    "icon": "134400",
    "code": "/use Shaded Sharpening Stone\n/use 16"
  },
  {
    "id": "00000000000000F3",
    "name": "All ShStone OH",
    "category": "General / Utility",
    "icon": "134400",
    "code": "/use Shaded Sharpening Stone\n/use 17"
  },
  {
    "id": "00000000000000AD",
    "name": "DemH Veng: 004",
    "category": "Demon Hunter",
    "icon": "INV_MISC_QUESTIONMARK",
    "code": "/#showtooltip Soul Cleave\n/use [modifier:alt] Fel Devastation; Soul Cleave\n/#showtooltip Fel Devastation\n#showtooltip Soul Cleave"
  },
  {
    "id": "00000000000000C5",
    "name": "DemH Veng: 005",
    "category": "Demon Hunter",
    "icon": "INV_MISC_QUESTIONMARK",
    "code": "/#showtooltip Sigil of Silence\n/use [modifier:alt, @cursor] Sigil of Silence; Sigil of Silence\n#showtooltip Sigil of Silence"
  },
  {
    "id": "00000000000000C6",
    "name": "DemH Veng: 006",
    "category": "Demon Hunter",
    "icon": "INV_MISC_QUESTIONMARK",
    "code": "/#showtooltip Elysian Decree\n/use [modifier:alt, @cursor] Elysian Decree; Elysian Decree\n#showtooltip Elysian Decree"
  },
  {
    "id": "00000000000000C0",
    "name": "DemH Veng: 007",
    "category": "Demon Hunter",
    "icon": "INV_MISC_QUESTIONMARK",
    "code": "/#showtooltip Infernal Strike\n/use [@player] Infernal Strike\n#showtooltip Infernal Strike"
  },
  {
    "id": "00000000000000A6",
    "name": "Druid 001",
    "category": "Druid",
    "icon": "INV_MISC_QUESTIONMARK",
    "code": "#showtooltip\n/cast Travel Form"
  },
  {
    "id": "00000000000000EC",
    "name": "Ev 00K",
    "category": "Evoker",
    "icon": "134400",
    "code": "#showtooltip Quell\n/cast [modifier:alt, target=focus, nohelp] Quell\n/cast [nomodifier, nohelp] Quell"
  },
  {
    "id": "00000000000000EB",
    "name": "Ev 00U",
    "category": "Evoker",
    "icon": "134400",
    "code": "#showtooltip Fire Breath\n/cast Fire Breath; Surge Forward"
  },
  {
    "id": "00000000000000EA",
    "name": "Ev 00Y",
    "category": "Evoker",
    "icon": "134400",
    "code": "/cast [known:376744] Skyward Ascent"
  },
  {
    "id": "00000000000000B1",
    "name": "Focus DemH: 003",
    "category": "Demon Hunter",
    "icon": "INV_MISC_QUESTIONMARK",
    "code": "#showtooltip Consume Magic\n/cast [modifier:alt, target=focus, nohelp] Consume Magic\n/cast [nomodifier, nohelp] Consume Magic"
  },
  {
    "id": "00000000000000B0",
    "name": "Focus DemH: 008",
    "category": "Demon Hunter",
    "icon": "INV_MISC_QUESTIONMARK",
    "code": "#showtooltip Death from Above(PvP Talent)\n/cast [modifier:alt, target=focus, nohelp] Death from Above(PvP Talent)\n/cast [nomodifier, nohelp] Death from Above(PvP Talent)"
  },
  {
    "id": "000000000000006E",
    "name": "Focus Quake Palm",
    "category": "General / Utility",
    "icon": "INV_MISC_QUESTIONMARK",
    "code": "#showtooltip Quaking Palm\n/cast [target=focus] Quaking Palm"
  },
  {
    "id": "00000000000000F9",
    "name": "Hunter 00T",
    "category": "Hunter",
    "icon": "132180",
    "code": "#showtooltip Misdirection\n/cast [modifier:alt, target=focus, help, nodead] Misdirection\n/cast [target=, help, nodead][@pet, help, nodead] Misdirection"
  },
  {
    "id": "00000000000000E7",
    "name": "Ma",
    "category": "Mage",
    "icon": "134400",
    "code": "/#showtooltip\n/cast [nomodifier, known:212653, nohelp] Shimmer\n/cast [nomodifier, known:385408, nohelp] Blink\n#showtooltip [known:212653] Shimmer; [known:1953] Blink"
  },
  {
    "id": "00000000000000C3",
    "name": "Mage Fire: 004",
    "category": "Mage",
    "icon": "INV_MISC_QUESTIONMARK",
    "code": "/#showtooltip Combustion\n/use [modifier:alt] Rune of Power; Combustion\n/#showtooltip Rune of Power\n#showtooltip Combustion"
  },
  {
    "id": "00000000000000CE",
    "name": "Racial: NightElf",
    "category": "Racial",
    "icon": "INV_MISC_QUESTIONMARK",
    "code": "/#showtooltip\n/cast [nostance, modifier:alt, nostealth] Shadowmeld\n/cast [stealth] Shroud of Concealment; Shadowmeld"
  },
  {
    "id": "00000000000000DF",
    "name": "Rogue 002",
    "category": "Rogue",
    "icon": "134400",
    "code": "/#showtooltip Detection\n/cast Detection"
  },
  {
    "id": "00000000000000D0",
    "name": "Rogue 003 Ven",
    "category": "Rogue",
    "icon": "INV_MISC_QUESTIONMARK",
    "code": "/#showtooltip\n/cast [modifier:alt] Cloak of Shadows; Door of Shadows"
  },
  {
    "id": "0000000000000095",
    "name": "Rogue 004 Outlaw",
    "category": "Rogue",
    "icon": "INV_MISC_QUESTIONMARK",
    "code": "/#showtooltip \n/cast [nomodifier, known:343142, nohelp] Dreadblades\n/cast [nomodifier, known:51690, nohelp] Killing Spree\n#showtooltip [known:343142] Dreadblades; [known:51690] Killing Spree"
  },
  {
    "id": "000000000000011E",
    "name": "Rogue 006",
    "category": "Rogue",
    "icon": "134400",
    "code": "#showtooltip\n/cast [known:212283, mod:alt] Shuriken Tornado\n/cast [known:426591] Goremaw's Bite\n/cast [known:315508, nomod] Roll the Bones\n/cast [known:381989, mod:alt] Keep It Rolling"
  },
  {
    "id": "00000000000000DD",
    "name": "Rogue 007",
    "category": "Rogue",
    "icon": "134400",
    "code": "#showtooltip\n/cast [known:280719] Secret Technique\n/cast [known:271877, nomod, nostealth] Blade Rush\n/use [known:385424, nomod, @mouseover] Serrated Bone Spike"
  },
  {
    "id": "0000000000000120",
    "name": "Rogue 008",
    "category": "Rogue",
    "icon": "134400",
    "code": "#showtooltip\n/cast [@mouseover, known: 5938] Shiv"
  },
  {
    "id": "0000000000000088",
    "name": "Rogue 009",
    "category": "Rogue",
    "icon": "134400",
    "code": "#showtooltip\n/use [mod:alt] Light's Potential\n/use [nomod] 13"
  },
  {
    "id": "000000000000008A",
    "name": "Rogue 00B",
    "category": "Rogue",
    "icon": "INV_MISC_QUESTIONMARK",
    "code": "#showtooltip Blind\n/cast [modifier:alt, target=focus, nohelp] Blind\n/cast [nomodifier, nohelp] Blind"
  },
  {
    "id": "0000000000000096",
    "name": "Rogue 00C",
    "category": "Rogue",
    "icon": "134400",
    "code": "#showtooltip\n/cast [noknown: Healthstone, modifier:alt] Crimson Vial\n/cast Crimson Vial\n/cast [known: Healthstone, mod:alt] Healthstone"
  },
  {
    "id": "00000000000000AA",
    "name": "Rogue 00E",
    "category": "Rogue",
    "icon": "INV_MISC_QUESTIONMARK",
    "code": "/#showtooltip\n/cast [nomodifier] Feint\n/cast [nostealth, modifier:alt] Evasion\n/cast [stealth, modifier:alt] Pick Pocket"
  },
  {
    "id": "000000000000006C",
    "name": "Rogue 00G",
    "category": "Rogue",
    "icon": "INV_MISC_QUESTIONMARK",
    "code": "#showtooltip [known: Gouge, nostance] Gouge; Sap\n/use [known: Gouge, nostance, mod:alt, @focus] Gouge\n/cast [modifier:alt, @focus] Sap\n/use [known: Gouge, nostance, nomod] Gouge; Sap\n/cast [modifier:alt, @focus] Sap\n/cast [nomod] Sap"
  },
  {
    "id": "00000000000000F6",
    "name": "Rogue 00H",
    "category": "Rogue",
    "icon": "134400",
    "code": "#showtooltip\n/tar [@mouseover]\n/cast [noknown:195457,mod:alt,@focus]Shadowstep\n/cast [known:36554,@mouseover,nomod]Shadowstep\n/cast [known:195457,mod:alt,@cursor]Grappling Hook"
  },
  {
    "id": "000000000000007E",
    "name": "Rogue 00I",
    "category": "Rogue",
    "icon": "134400",
    "code": "#showtooltip\n/startattack [nostealth]\n/cast [known:703, mod:alt] Garrote\n/cast [known:703, nomod, @mouseover, exists] Garrote\n/cast [known:185313, mod:alt] Shadow Dance\n/cast [known:51690, mod:alt] Killing Spree\n/cast [bonusbar:1] Ambush; Sinister Strike"
  },
  {
    "id": "000000000000008F",
    "name": "Rogue 00J",
    "category": "Rogue",
    "icon": "134400",
    "code": "#showtooltip [nostance, nostealth] Kidney Shot; Cheap Shot\n/cast [nostance, mod:alt, @focus] Kidney Shot\n/cast [mod:alt, @focus] Cheap Shot\n/cast [nostance, nomod, @cursor] Kidney Shot\n/cast [nomod] Cheap Shot"
  },
  {
    "id": "0000000000000089",
    "name": "Rogue 00K",
    "category": "Rogue",
    "icon": "INV_MISC_QUESTIONMARK",
    "code": "#showtooltip Kick\n/cast [mod:alt, target=focus, nohelp] Kick\n/cast [nomod, nohelp] Kick"
  },
  {
    "id": "0000000000000091",
    "name": "Rogue 00L",
    "category": "Rogue",
    "icon": "134400",
    "code": "#showtooltip\n/cast [nomod] Cloak of Shadows\n/use [mod:alt] Healthstone"
  },
  {
    "id": "0000000000000092",
    "name": "Rogue 00L Outlaw",
    "category": "Rogue",
    "icon": "134400",
    "code": "/#showtooltip Between the Eyes\n/cast [nomodifier, known] Ghostly Strike;Between the Eyes\n/cast [nomodifier, known] Sepsis;Between the Eyes\n/cast [modifier:alt] Between the Eyes\n#showtooltip [known] Ghostly Strike; [known] Sepsis; Between the Eyes"
  },
  {
    "id": "0000000000000081",
    "name": "Rogue 00O",
    "category": "Rogue",
    "icon": "134400",
    "code": "/#showtooltip\n/cast [mod:alt] Eviscerate\n/cast [known:114014] Shuriken Toss\n/cast [known:185763] Pistol Shot\n/cast [known:185565, @mouseover] Poisoned Knife"
  },
  {
    "id": "0000000000000026",
    "name": "Rogue 00S",
    "category": "Rogue",
    "icon": "INV_MISC_QUESTIONMARK",
    "code": "#showtooltip Stealth\n/cancelaura [nocombat] Shadow Dance\n/cast [modifier:alt] Stealth; !Stealth\n/stopattack\n/cast !Stealth\n/stopattack [nocombat] "
  },
  {
    "id": "00000000000000F8",
    "name": "ROGUE 00T",
    "category": "Rogue",
    "icon": "236283",
    "code": "#showtooltip Tricks of the Trade\n/cast [mod:alt,@focus,help,nodead] Tricks of the Trade\n/cast [@target,help,nodead][@pet,help,nodead][help,nodead] Tricks of the Trade"
  },
  {
    "id": "0000000000000086",
    "name": "Rogue 00U",
    "category": "Rogue",
    "icon": "134400",
    "code": "#showtooltip\n/cast [spec:1, nomod] Deathmark\n/cast [spec:2, nomod] Adrenaline Rush\n/cast [spec:3] Shadow Blades\n/cast [known:1943, mod:alt, @mouseover, exists] Rupture; [@mouseover] Rupture"
  },
  {
    "id": "000000000000009C",
    "name": "Rogue 00V",
    "category": "Rogue",
    "icon": "INV_MISC_QUESTIONMARK",
    "code": "#showtooltip\n/stopattack\n/cast [known:Shadowmeld, modifier:alt] Shadowmeld; Vanish\n/cast [nomodifier] Vanish\n/stopattack"
  },
  {
    "id": "00000000000000CB",
    "name": "Rogue 00W",
    "category": "Rogue",
    "icon": "134400",
    "code": "/#showtooltip\n/cast [nostance, modifier:alt] Cannibalize\n/cast [nostealth] Will of the Forsaken\n/cast [stealth] Shroud of Concealment; Will of the Forsaken"
  },
  {
    "id": "00000000000000CF",
    "name": "Rogue 00X",
    "category": "Rogue",
    "icon": "134400",
    "code": "/#showtooltip\n/use [noknown: Potion of Spectral Agility] 13\n/use Potion of Spectral Agility\n/use [modifier:alt] 13"
  },
  {
    "id": "000000000000011A",
    "name": "Rogue 00Y",
    "category": "Rogue",
    "icon": "134400",
    "code": "#showtooltip\n/stopattack [stealth]\n/cast [known: 319175, mod:alt] Black Powder\n/cast [known: 315341, mod:alt] Between the Eyes\n/cast [known: 1247227, mod:alt] Crimson Tempest\n/cast [spec:1,nomod] Fan of Knives; [spec:2,nomod] Blade Flurry; Shuriken Storm"
  },
  {
    "id": "00000000000000D1",
    "name": "Rogue 00Z",
    "category": "Rogue",
    "icon": "INV_MISC_QUESTIONMARK",
    "code": "/#showtooltip\n/use [modifier:alt] 14\n/cast [known: Will of the Forsaken, nomod] Will of the Forsaken\n/use [noknown: Will of the Forsaken, nomod] 14"
  },
  {
    "id": "00000000000000CA",
    "name": "Rogue EAB Belt",
    "category": "Rogue",
    "icon": "132492",
    "code": "#showtooltip 6\n/use [modifier:alt, target=focus, nohelp] 6\n/use [nomod, nohelp] 6"
  },
  {
    "id": "000000000000002A",
    "name": "Sap - PvP",
    "category": "Rogue",
    "icon": "INV_MISC_QUESTIONMARK",
    "code": "#showtooltip Sap\n/cleartarget \n/targetenemy\n/cast Sap"
  },
  {
    "id": "000000000000005E",
    "name": "Script: Haste",
    "category": "General / Utility",
    "icon": "INV_MISC_QUESTIONMARK",
    "code": "/script local _,gcd=GetSpellCooldown(\"61304\"); print(\"Current global cooldown is \"..gcd..\" seconds.\")"
  },
  {
    "id": "0000000000000127",
    "name": "TBE: Random Toy",
    "category": "General / Utility",
    "icon": "inv_misc_dice_02",
    "code": "/click TBERandomFavoredToy LeftButton true"
  },
  {
    "id": "00000000000000C1",
    "name": "Warl Affl: 001",
    "category": "Warlock",
    "icon": "INV_MISC_QUESTIONMARK",
    "code": "/#showtooltip Drain Soul\n/startattack\n/use [modifier:alt] Siphon Life\n/cast Drain Soul\n#showtooltip Drain Soul"
  },
  {
    "id": "00000000000000C2",
    "name": "Warl Affl: 002",
    "category": "Warlock",
    "icon": "INV_MISC_QUESTIONMARK",
    "code": "/#showtooltip Malefic Rapture\n/cast [modifier:alt] Corruption\n/cast Malefic Rapture\n#showtooltip Malefic Rapture"
  },
  {
    "id": "0000000000000107",
    "name": "Warrior 005",
    "category": "Warrior",
    "icon": "613534",
    "code": "#showtooltip\n/cast [known: Ravager, mod:alt] Ravager\n/cast [known: Warbreaker, mod:alt] Warbreaker\n/cast [known: Colossus Smash, mod:alt] Colossus Smash\n/cast [known: Avatar, nomod] Avatar"
  },
  {
    "id": "00000000000000FF",
    "name": "Warrior 006",
    "category": "Warrior",
    "icon": "134400",
    "code": "#showtooltip \n/cast [known: 46968, mod:alt] Shockwave; Demolish\n/cast [noknown: Shockwave, mod:alt] Demolish"
  },
  {
    "id": "0000000000000105",
    "name": "Warrior 007",
    "category": "Warrior",
    "icon": "134400",
    "code": "#showtooltip\n/cast [nomod] Avatar\n/cast [mod:alt] Thunderous Roar"
  },
  {
    "id": "00000000000000FC",
    "name": "Warrior 008",
    "category": "Warrior",
    "icon": "134400",
    "code": "#showtooltip\n/cast [@mouseover,harm,nodead] Taunt\n/cast [known: Berserker Rage, nomod] Berserker Rage\n/cast [known: 1161, modifier:alt] Challenging Shout\n/cast [known: 227847, modifier:alt] Bladestorm\n/cast [known: 260708, nomod] Sweeping Strikes"
  },
  {
    "id": "000000000000012B",
    "name": "Warrior 009",
    "category": "Warrior",
    "icon": "134400",
    "code": "#showtooltip\n/cast [known: 228920, mod:alt] Ravager\n/cast [known: 1160, nomod] Demoralizing Shout\n/cast [known: 227847, mod:alt] Bladestorm\n/cast [known: 260708, nomod] Sweeping Strikes"
  },
  {
    "id": "0000000000000131",
    "name": "Warrior 00B",
    "category": "Warrior",
    "icon": "134400",
    "code": "#showtooltip 1715\n/cast [known:1715, mod:alt, @mouseover, exists] Hamstring"
  },
  {
    "id": "00000000000000FE",
    "name": "Warrior 00C",
    "category": "Warrior",
    "icon": "134400",
    "code": "#showtooltip [mod:alt] Healthstone;Last Stand\n/cast [mod:alt] Healthstone;Last Stand\n/cast [nomod]Last Stand"
  },
  {
    "id": "0000000000000109",
    "name": "Warrior 00E",
    "category": "Warrior",
    "icon": "134400",
    "code": "#showtooltip\n/cast [known: Shield Wall, nomod] Shield Wall\n/cast [known: 97462, mod:alt] Rallying Cry; Shield Wall\n/cast [known: 118038, nomod] Die by the Sword; Shield Wall"
  },
  {
    "id": "00000000000000FD",
    "name": "Warrior 00G",
    "category": "Warrior",
    "icon": "134400",
    "code": "#showtooltip [known: Storm Bolt] Storm Bolt\n/use [known: Storm Bolt, mod:alt, @focus] Storm Bolt\n/use [known: Storm Bolt, nomod] Storm Bolt"
  },
  {
    "id": "00000000000000FB",
    "name": "Warrior 00H",
    "category": "Warrior",
    "icon": "134400",
    "code": "#showtooltip [known:6544,mod:alt]Heroic Leap; Charge\n/target [@mouseover]\n/cast [@mouseover,help,nomod]Intervene\n/cast [@mouseover,harm,nomod]Charge\n/cast [known:6544,mod:alt,@cursor]Heroic Leap"
  },
  {
    "id": "0000000000000103",
    "name": "Warrior 00I",
    "category": "Warrior",
    "icon": "134400",
    "code": "#showtooltip\n/cast [modifier:alt] Ignore Pain\n/cast [nomod] Shield Slam"
  },
  {
    "id": "000000000000010D",
    "name": "Warrior 00I Arms",
    "category": "Warrior",
    "icon": "134400",
    "code": "#showtooltip\n/cast [modifier:alt] Ignore Pain\n/cast [nomod] Cleave"
  },
  {
    "id": "0000000000000102",
    "name": "Warrior 00J",
    "category": "Warrior",
    "icon": "134400",
    "code": "#showtooltip\n/target [@mouseover]\n/startattack\n/cast [modifier:alt] Victory Rush\n/cast [nomod, @mouseover,harm,nodead] Execute;Execute"
  },
  {
    "id": "00000000000000FA",
    "name": "Warrior 00K",
    "category": "Warrior",
    "icon": "134400",
    "code": "#showtooltip Pummel\n/cast [modifier:alt, target=focus, nohelp] Pummel\n/cast [nomodifier, nohelp] Pummel"
  },
  {
    "id": "000000000000012D",
    "name": "Warrior 00L",
    "category": "Warrior",
    "icon": "134400",
    "code": "#showtooltip\n/cast [nomod] Healthstone\n/use [mod:alt] Spell Block"
  },
  {
    "id": "0000000000000101",
    "name": "Warrior 00O",
    "category": "Warrior",
    "icon": "134400",
    "code": "/#showtooltip\n/cast [known: Revenge, mod:alt] Revenge\n/cast [noknown: Revenge, mod:alt] Whirlwind\n/cast [nomod, @mouseover] Heroic Throw"
  },
  {
    "id": "0000000000000108",
    "name": "Warrior 00S",
    "category": "Warrior",
    "icon": "134400",
    "code": "#showtooltip [nomod] Defensive Stance; Battle Stance\n/cast [mod:alt, stance:1] Battle Stance; Defensive Stance"
  },
  {
    "id": "0000000000000104",
    "name": "Warrior 00U",
    "category": "Warrior",
    "icon": "134400",
    "code": "#showtooltip\n/cast [modifier:alt] Shield Block\n/cast [known: Shield Charge, nomod, @mouseover] Shield Charge"
  },
  {
    "id": "000000000000010E",
    "name": "Warrior 00U Arms",
    "category": "Warrior",
    "icon": "134400",
    "code": "#showtooltip\n/cast [modifier:alt] Overpower\n/cast [known: Overpower, nomod, @mouseover] Rend"
  },
  {
    "id": "000000000000010A",
    "name": "Warrior 00V",
    "category": "Warrior",
    "icon": "134400",
    "code": "#showtooltip [known:Quaking Palm]Quaking Palm\n/cast [mod:alt, target=focus, nohelp] Quaking Palm\n/cast [nomod, nohelp] Quaking Palm"
  },
  {
    "id": "000000000000010C",
    "name": "Warrior 00X",
    "category": "Warrior",
    "icon": "134400",
    "code": "#showtooltip\n/use [modifier:alt] 13\n/use [nomod] 14"
  },
  {
    "id": "0000000000000100",
    "name": "Warrior 00Y",
    "category": "Warrior",
    "icon": "134400",
    "code": "#showtooltip\n/cast [known: 5246, mod:alt] Intimidating Shout; Thunder Clap\n/cast Thunder Clap"
  },
  {
    "id": "0000000000000106",
    "name": "Warrior 00Z",
    "category": "Warrior",
    "icon": "134400",
    "code": "#showtooltip\n/use [modifier:alt] 14\n/use [nomod] 14"
  }
];
