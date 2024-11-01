# Intruction By Category

Note: Not all instructions are here. Few instructions might be mentioned more than once, but it's intended.

## cmd_XXX

### Basic Math

- [cmd_mov](../cmd_mod.md) (=, assign)
- [cmd_add](../cmd_add.md) (+), [cmd_sub](../cmd_sub.md) (-) [cmd_mul](../cmd_mul.md) (*), [cmd_div](../cmd_div.md) (/), [cmd_mod](../cmd_mod.md) (%)
- [cmd_iand](../cmd_iand.md) (&), [cmd_ior](../cmd_ior.md) (|), [cmd_ixor](../cmd_ixor.md) (^)
- [cmd_irol](../cmd_irol.md) (<<), [cmd_iror](../cmd_iror.md) (>>)
- [cmd_abs](../cmd_abs.md), [cmd_sqrt](../cmd_sqrt.md), [cmd_sinf](../cmd_sinf.md), [cmd_cosf](../cmd_cosf.md), [cmd_atan2f](../cmd_atan2f.md)

### Jumping, Calling

- [cmd_end](../cmd_end.md), [cmd_jmp](../cmd_jmp.md), [cmd_call](../cmd_call.md)

#### If case jump

- [cmd_ifEQ](../cmd_ifeq.md) (==), [cmd_ifNE](../cmd_ifne.md) (!=)
- [cmd_ifLS](../cmd_ifls.md) (<), [cmd_ifLSE](../cmd_iflse.md) (<=), [cmd_ifLB](../cmd_iflb.md) (>), [cmd_ifLBE](../cmd_iflbe.md) (>=)
- [cmd_ifAND](../cmd_ifand.md) (&), [cmd_ifOR](../cmd_ifor.md) (|)
- [cmd_resJmp](../cmd_resjmp.md)
- [cmd_inxJmp](../cmd_inxjmp.md)

#### If case call

- [cmd_ifCallEQ](../cmd_ifcalleq.md) (==), [cmd_ifCallNE](../cmd_ifcallne.md) (!=)
- [cmd_ifCallLS](../cmd_ifcallls.md) (<), [cmd_ifCallLSE](../cmd_ifcalllse.md) (<=), [cmd_ifCallLB](../cmd_ifcalllb.md) (>), [cmd_ifCallLBE](../cmd_ifcalllbe.md) (>=)
- [cmd_ifCallAND](../cmd_ifcalland.md) (&), [cmd_ifCallOR](../cmd_ifcallor.md) (|)
- [cmd_resCall](../cmd_rescall.md)

#### Flag Jumping

Check [About Flag](./about-flag.md).

- [cmd_flgAnd](../cmd_flgand.md) (&), [cmd_flgOr](../cmd_flgor.md) (|), [cmd_flgZero](../cmd_flgzero.md)
- [cmd_flgSet](../cmd_flgset.md), [cmd_flgMov](../cmd_flgmov.md), [cmd_flgClr](../cmd_flgclr.md)
- [cmd_flgSetId](../cmd_flgsetid.md), [cmd_flgClrId](../cmd_flgclrid.md)
- [cmd_flgMemCpy](../cmd_flgmemcpy.md), [cmd_flgMemSet](../cmd_flgmemset.md)

### Other utils

- [cmd_rand](../cmd_rand.md), [cmd_srand](../cmd_srand.md)
- [cmd_WaitFrame](../cmd_waitframe.md), [cmd_WaitTime](../cmd_waittime.md), [cmd_getElapsedTime](../cmd_getelapsedtime.md)
- [cmd_addArray](../cmd_addarray.md), [cmd_getArray](../cmd_getarray.md), [cmd_setArray](../cmd_setarray.md)

## Unit / Gimmick

- [setupUnit](../setupunit.md), [applyUnit](../applyunit.md)

### Model

- [addChara](../addchara.md)
- [getModelInfo](../getmodelinfo.md), [getParent](../getparent.md)
- [setModelInfo](../setmodelinfo.md), [setParent](../setparent.md), [setModelLowerHeight](../setmodellowerheight.md), [setModelRotate](../setmodelrotate.md), [setModelColor](../setmodelcolor.md)
- [createChangeModel](../createchangemodel.md), [changeModel](../changemodel.md)
- [getDirection](../getdirection.md), [setDirection](../setdirection.md), [getTroopSign](../gettroopsign_25175f00.md)
- [isHero](../ishero.md), [isMyHero](../ismyhero.md)

#### Gimmick

Unlike effect, gimmick has another "unique ID" that is not handle. Some gimmick related instructions gets or sets the ID value. The ID value is *manually defined* by giving as parameter in some instructions.

- [addGimmick](../addgimmick.md)
- [getGateInfo](../getgateinfo.md), [setGateInfo](../setgateinfo.md), [resetGateInfo](../resetgateinfo.md)
- [registConstGimmick](../registconstgimmick.md), [applyConstGimmick](../applyconstgimmick.md), [enableCollisionConstGimmick](../enablecollisionconstgimmick.md)
- [setActionController](../setactioncontroller.md)
- [getChildGimmick](../getchildgimmick.md)
- [setGimmickTimmingScript](../setgimmicktimmingscript.md)

#### Collision

- [getCollisionSize](../getcollisionsize.md), [getCollisionType](../getcollisiontype.md)
- [addHit](../addhit.md), [setCollisionSize](../setcollisionsize.md), [enableCollision](../enablecollision.md)

### Effect

- [addEffect](../addeffect.md)
- [effectGetUserID](../effectgetuserid.md), [effectGetEffectID](../effectgeteffectid.md)
- [effectSetDeleteId](../effectsetdeleteid.md), [effectKill](../effectkill.md)
- [setEffectTimmingScript](../seteffecttimmingscript.md), [effectSetTimingScript](../effectsettimmingscript.md), [effectSetWaitTime](../effectsetwaittime.md)
- [playHitEffect](../playhiteffect.md)

### Damage

- [setDamageParam](../setdamageparam.md)

### Creating / Handling Enemy Units

#### Generator Setup

Related article: [How to: create an Enemy Target](./how-to-create-an-enemy-target.md)

- First, make a empty generator : [create](../create.md)
- [setTroopType](../settrooptype.md), [setLevel](../setlevel.md), ~~[setMode](../setmode.md)~~, [setModeEx](../setmodeex.md), [setPosX](../setposx.md), [setDeathCall](../setdeathcall.md), [setAdventRadius](../setadventradius.md), [setItemTable](../setitemtable_25174900.md)
- [isActiveGen](../isactivegen.md), [multi_waitActiveGenerator](../multi_waitactivegenerator.md)

##### Other troop instructions

- [getTroopType_gimmickUId](../gettrooptype_gimmickuid.md)

#### ReqActors

`ReqActor` represents a PVE Enemy or possibly a gimmick. As a PVE enemy, they can be boss, miniboss, or small enemies like AI Dark heroes or Deths.

- [setReqActorType](../setreqactortype.md), [setReqActorCount](../setreqactorcount.md), [setReqActorRenderPrio](../setreqactorrenderprio.md), [setReqActorItemTable](../setreqactoritemtable.md), [setReqActorUniqueId](../setreqactoruniqueid.md), [setReqActorHp](../setreqactorhp.md)
- [setReqActorPos](../setreqactorpos.md), [setReqActorMovePos](../setreqactormovepos.md) [setReqActorScale](../setreqactorscale.md), [setReqActorFixPosFlag](../setreqactorfixposflag.md)
- [setReqActorAdventRadius](../setreqactoradventradius.md), [setReqActorMoveRadius](../setreqactormoveradius.md)
- [setReqActorWeapon](../setreqactorweapon.md), [setReqActorHp](../setreqactorhp.md), [setReqActorLevel](../setreqactorlevel.md)
- Control spawning: [setReqActorTotal](../setreqactortotal.md), [setReqActorDelayTime](../setreqactordelaytime.md)

#### Getting handle

Related article: [How To: Get a handle](./how-to-get-a-handle.md)

For hideout exclusive handle, check [hideout](#hideout) section.

- Squad: [getUnitSquadHandle](../getunitsquadhandle.md) (from reqActor unique ID), [getSquadHandle](../getsquadhandle.md) (from generator + reqIndex), [getPlayerSquadHandle](../getplayersquadhandle.md) (from player), [getUnitSquadHandleFromChara](../getunitsquadhandlefromchara.md) (from unit handle)
- Unit: [getUnitHandle](../getunithandle.md), [getHataponHandle](../gethataponhandle.md), [getMultiHeroHandle](../getmultiherohandle.md)
- Effect/Gimmick: [addEffect](../addeffect.md), [gimmick_getHandle](../gimmick_gethandle.md)
- Any Actor : [getActorHandle](../getactorhandle.md)
- Generator: [getHandle](../gethandle.md)

### Squad

- [addSquad](../addsquad.md)
- [getSquadBasePosition](../getsquadbaseposition.md), [getSquadClassId](../getsquadclassid.md)
- [setSquadBasePosition](../setsquadbaseposition.md) [setPlayerSquadType](../setplayersquadtype.md)
- [getMultiplayerSquadHandle](../getmultiplayersquadhandle.md)
- [getSquadClassId](../getsquadclassid.md), [getPlayerClassId](../getplayerclassid.md)
- [replaceActivityTable](../replaceactivitytable.md)
- [isFrontLineEnterView](../isfrontlineenterview.md), [sFrontLineEnterAttack](../isfrontlineenterattack.md)

### Class

- [setClassData](../setclassdata.md)
- [getClassType](../getclasstype.md), [setSuperHero](../setsuperhero.md)
- [addSkill](../addskill.md), [isRegisterSkill](../isregisterskill.md)
- [setClassData](../setclassdata.md)
- [getUnitParam](../getunitparam_25161b00.md)

### Level

- [getPlayerClassLevel](../getplayerclasslevel.md), [getMultiPlayerLevelMax](../getmultiplayerlevelmax.md)
- [resultLevelupCalacLabel](../resultlevelupcalaclabel.md), ~~[resultLevelupCalacGet](../resultlevelupcalacget.md), [resultLevelupCalacSet](../resultlevelupcalacset.md)~~
- [setActorLevel](../setactorlevel.md)

### Equipment

- [isPlayerEquipWeaponCategory](../isplayerequipweaponcategory.md), [isEquipWeaponInTroop](../isequipweaponintroop.md)
- [addEquip](../addequip.md), [addEquipSubModel](../addequipsubmodel.md)
- [getEquipItemParam](../getequipitemparam.md)

## Action

- [isHeromode](../isheromode.md), [isPossibleExecHeromode](../ispossibleexecheromode.md)

### Position

- [setAdvanceEnable](../setadvanceenable.md), [setAdvanceSpeedRatio](../setadvancespeedratio.md)
- [getPlayerTroopBasePosition](../getplayertroopbaseposition.md)
- [getTroopTopPosX](../gettrooptopposx.md), [getTroopTopPosX_enemy](../gettrooptopposx_enemy.md), [getTroopPosY](../gettrooptopposy.md)


#### Animation

- [playMotion](../playmotion.md), [pushMotion](../pushmotion.md), [clipMotion](../clipmotion.md), [stopMotion](../stopmotion.md), [pauseMotion](../pausemotion.md)
- [getMotionInfo](../getmotioninfo.md), [setMotion](../setMotion.md)

##### Node

- [getNodeIndex](../getnodeindex.md), [getNodePos](../getnodepos.md), [getCenterNodeId](../getcenternodeid.md)
- [setLink](../setlink.md), [setLinkParam](../setlinkparam.md), [setLinkById](../setlinkbyid.md), [releaseLink](../releaselink.md), [setLinkInfo](../setlinkinfo.md)
- [enableRenderAttach](../enablerenderattach.md)
- [getNodeDisp](../getnodedisp.md), [setNodeDisp](../setnodedisp.md)
- Adding an Enemy Target: [callActorEffect](../callactoreffect.md), [addLinkObject](../addlinkobject.md)

### Control

- [getActive](../getactive.md), [setActive](../setactive.md)
- [spawn](../spawn.md)

#### Unit Control

Related article: [How To Control a Squad](./how-to-control-a-squad.md)

- [setUnitCtrlEnable](../setunitctrlenable.md), [setUnitCtrlMode](../setunitctrlmode.md)
- [setUnitCtrlStartActType](../setunitctrlstartacttype.md), [setUnitCtrlRangerActType](../setunitctrlrangeracttype.md), [getUnitCtrlCurrentActType](../getunitctrlcurrentacttype.md), [setUnitCtrlCurrentActType (Generator)](../setunitctrlcurrentacttype_251f2700.md), [setUnitCtrlCurrentActType (SquadHandle)](../setunitctrlcurrentacttype_2516d800.md)
- [setUnitCtrlWatchArea](../setunitctrlwatcharea.md)
- [setUnitCtrlTimingScript_Int](../setunitctrltimingscript_int.md), [setUnitCtrlEnable](../setunitctrlenable.md), [setUnitCtrlMoveEnable](../setunitctrlmoveenable.md)
- [getUnitCtrlActivity](../getunitctrlactivity.md), [setUnitCtrlActivity](../setunitctrlactivity_251f1c00.md)

Note that squadActivity and actual march/attack/defend action can be different, and can be faked.

#### Boss Control

- [setBossMoveRange](../setbossmoverange_251f2e00.md), [setBossMoveRangeLimit](../setbossmoverangelimit_251f2f00.md)
- [getBossActionId](../getbossactionid.md), [setBossActionId](../setbossactionid.md), [enableBossManualCtrl](../enablebossmanualctrl.md)
- [setBossNoDamage](../setbossnodamage.md), [setBossDisableAtkMove](../setbossdisableatkmove.md)

### Status

- [kill](../kill.md), [rebornTroop](../reborntroop.md), [setSuperHeroRebornEnable](../setsuperherorebornenable.md), [getAliveUnitCount](../getaliveunitcount.md)
- [setRebornPosition](../setrebornposition.md), [setAppearancePosition](../setappearanceposition.md)
- [recoveryHp](../recoveryhp.md), [recoveryHpRatio](../recoveryhpratio.md) [recoveryPlayerTroopHp](../recoveryplayertroophp.md), [recoveryPlayerTroopHpRatio](../recoveryplayertroophpratio.md)
- [setMaxHitPoint](../setmaxhitpoint.md)

### Status Effect
- [addAbnormalStatus](../addabnormalstatus.md), [addAbnormalStatusSlip](../addabnormalstatusslip.md), [addAbnormalStatusBlowoff](../addabnormalstatusblowOff.md)
- [getAbnormalStatus](../getabnormalstatus.md)

## Mission Information

- [getGameMode](../getgamemode.md), [setGameMode](../setgamemode.md)
- [getMissionAreaId](../getmissionareaid.md), [setMaxMissionAreaId](../setmaxmissionareaid.md), [getMaxMissionAreaId](../getmaxmissionareaid.md), [setMissionAreaId](../setmissionareaid.md), [getMissionInfo](../getmissioninfo.md)
- [setMissionTimmingScript](../setmissiontimmingscript.md)
- [resultGetState](../resultgetstate.md), [resultSetState](../resultsetstate.md), [resultGetPhase](../resultgetphase.md)
- [disableRetireBox](../disableretirebox.md)

### Quest Data

- [getQuestLevelRevise](../getquestlevelrevise.md), [setQuestLevelRevise](../setquestlevelrevise.md), ~~[getQuestLevel](../getquestlevel.md), [setQuestLevel](../setquestlevel.md)~~
- [getQuestComplementCounter](../getquestcompletecounter.md), [incQuestComplementCounter](../incquestcompletecounter.md)
- [setQuestPayExp](../setquestpayexp.md), [setQuestPayItem](../setquestpayitem.md), [resetQuestPay](../resetquestpay.md)

### Waiting until loaded (WaitGoAhead)

This is called with pons too. For multi, check [network](#network) section.

- [multi_waitGoAhead](../multi_waitgoahead.md), [multi_WaitGoAhead1](../multi_waitgoahead1.md)
- Cutscene sync : [multi_startNoSyncEvent](../multi_startnosyncevent.md), [multi_endNoSyncEvent](../multi_endnosyncevent.md) [multi_waitTimeSync](../multi_waittimesync.md)
- [multi_waitActiveGenerator](../multi_waitactivegenerator.md)
- [multi_battleGoAHead](../multi_battlegoahead.md), [startIntroEvent](../startintroevent.md), [start](../start.md)
- [isGoGame](../isgogame.md), [startGame](../startgame.md)

## Mission Environment

### Stage

Related Article: [How To: Setup Stages](./how-to-setup-stages.md)

- [addStage](../addstage_25165d00.md), [setStageParam](../setstageparam.md)
- [startSetupStage](../startsetupstage.md), [endSetupStage](../endsetupstage.md), [applyStage](../applystage.md)

#### Dungeon

For door gimmick, see [gimmick](#gimmick) section.

- [setupStartDungeonWall](../setupstartdungeonwall.md), [setupAddDungeonWall](../setupadddungeonwall.md), [setupDungeonComment](../setupdungeoncomment.md), [setupEndDungeonWall](../setupenddungeonwall.md)

### Weather

- [getRainLevel](../getrainlevel.md), [getSnowLevel](../getsnowlevel.md), [getThunderLevel](../getthunderlevel.md), [getWindLevel](../getwindlevel.md), [getWindDirection](../getwinddirection.md), [getFogLevel](../getfoglevel.md), [getSandLevel](../getsandlevel.md), [getCloudyLevel](../getcloudylevel.md)
- [setRainLevel](../setrainlevel.md), [setSnowLevel](../setsnowlevel.md),  [setThunderLevel](../setthunderlevel.md), [setWindLevel](../setwindlevel.md), [setWindDirection](../setwinddirection.md), [setFogLeve](../setfogleve.md), [setSandLevel](../setsandlevel.md), [setCloudyLevel](../setcloudylevel.md)
- [setWindColor](../setwindcolor.md)
- [reflectWeather](../reflectweather.md)

### Camera

- [cameraGetPos](../cameragetpos.md), [cameraGetPosX](../cameragetposx.md), [cameraGetOffsetY](../cameragetoffsety.md), [cameraSetPosZ](../camerasetposz.md), [cameraSetBattleZ](../camerasetbattlez.md)
- [cameraSetScriptCmaera](../camerasetscriptcmaera.md), [cameraEnableControl](../cameraenablecontrol.md), [cameraEnabeControll](../cameraenablecontroll.md)
- [cameraMove](../cameramove.md), [cameraMoveType](../cameramovetype.md) [cameraMoveSpeedSet](../cameramovespeedset.md), [cameraMoveTimeSet](../cameramovetimeset.md)
- [setCameraPosition](../setcameraposition.md)
- [cameraActuate](../cameraactuate.md)

### Music / Sound

- Sound: [playSe](../playse_250b0100.md), [playSeFromPos](../playsefrompos.md)
- Music: [playAtrac](../playatrac.md), [cancel](../cancel.md), [stop](../stop_250b0300.md)
- Bgm: [setMssionBgmId](../setmssionbgmid.md)

### Rhythm / Command

- [getCommandId](../getcommandid.md), [getCommandRate](../getcommandrate.md), [getCommandScore](../getcommandscore.md), 
- [getCombo](../getcombo.md), [getSoundLevel](../getsoundlevel.md)
- Chant turn: [isRhythm](../isrhythm.md)
- [sendCommand](../sendcommand.md), [sendMiss](../sendmiss.md)
- [clearAutoCommand](../clearautocommand.md), [setAutoCommand](../setautocommand.md), [addAutoCommandKey](../addautocommandkey.md), [startAutoCommandKey](../startautocommandkey.md)
- [setDisableKey](../setdisablekey.md)
- Command Cancel: [isEnableRhythmHit](../isenablerhythmhit.md) [setEnableRhythmHit](../setenablerhythmhit.md), [isSoundDisableRhtyhmHit](../issounddisablerhtymhit.md), [setSoundDisableRhtyhmHit](../setsounddisablerhtymhit.md)
- Drum Hit: [getHitPercussion](../gethitpercussion.md), [getDisablePercussionFlag](../getdisablepercussionflag.md), [setDisablePercussionFlag](../setdisablepercussionflag.md), [getDisablePercussionView](../getdisablepercussionview.md), [setDisablePercussionView](../setdisablepercussionview.md), [getHitRate](../gethitrate.md)
- Drum Shout: [setDiableHeroVoice](../setdisableherovoice.md), [clearDisableHeroVoice](../cleardisableherovoice.md)

### VS

PvE VS playtime is hardcoded and can't edit with this.

- [getVersusPlayerCount](../getversusplayercount.md), [setVersusRule](../setversusrule.md)
- [isVisibleVersusString](../isvisibleversusstring.md), [setVersusString](../setversusstring.md)
- [getVersusPKInfo](../getversuspkinfo.md)
- [setMultiMapViewState](../setmultimapviewstate.md)
- [multiSetTime](../multisettime.md) (Time limit), [getDeadCount](../getdeadcount.md) (Reborn amount based VS)
- Scoring: [multiGetScore](../multigetscore.md), [multiSetScore](../multisetscore.md), [getBrakeScore](../getbrakescore.md), [setBrakeScore](../setbrakescore.md), [setBreakScoreTroop](../setbreakscoretroop.md)

#### Head-on

- [getGimmickPowerGaugePoint](../getgimmickpowergaugepoint.md)
- [gimmickGetUserIdI](../gimmickgetuseridi.md), [gimmickSetUserIdI](../gimmicksetuseridi.md), [gimmickGetUserIdF](../gimmickgetuseridf.md), [gimmickSetUserIdF](../gimmicksetuseridf.md)

#### Head-on

#### Summon
- [getEquipSummonType](../getequipsummontype.md), [setEnemySummonType](../setenemysummontype.md)
- [isSummonMode](../issummonmode.md), [startSummonMode](../startsummonmode.md)

## Item

- Adding items directly: [addItem (Obtain)](../additem_25166100.md), [addItem (Inventory)](../additem_250a0900.md)
- [addItemEffect](../additemeffect.md) to drop item manually.
- [getGfpData](../getgfpdata.md), [serchGfpId](../serchgfpid.md)
- [clearItem](../clearitem.md), [setKnownItem](../setknownitem.md)

### Item drops

Related article: [How To: Set Item Drops](./how-to-set-item-drops.md).

Called in phase 1 (2nd phase) of `setMissionTimmingScript`.

- [beginAppearItem](../beginappearitem.md), [endAppearItem](../endappearitem.md)
- [getAppearItem](../getappearitem.md), [getAppearItemEx](../getappearitemex.md)
- [setAppearItem](../setappearitem.md), [setCharinAppearParam](../setcharinappearparam.md), [setAppearItemKillTime](../setappearitemkilltime.md)

#### Loots

- [itemTableAllClear](../itemtableallclear.md)
- [resultBoxItemGet](../resultboxitemget.md), [resultBoxItemLabel](../resultboxitemlabel.md), [resultBoxItemSet](../resultboxitemset.md)

## Input

- [getDisableKey](../getdisablekey.md), [setDisableKey](../setdisablekey.md)
- [getPadDirect](../getpaddirect.md), [getPadStand](../getpadstand.md), [getPadRelease](../getpadrelease.md)

## Resources
- [readArcFile](../readarcfile.md), [requestActor](../requestactor.md), ~~[syncReadArcFile](../syncreadarcfile.md)~~

## Graphic

- [getRenderPriority](../getrenderpriority.md), [setRenderPriority](../setrenderpriority_25030900.md)

### UI / Display

> [!WARNING]
> Most of the UIs exist for good reason.
> Messing up with the basic UI while playing is considered as bad UX design practice (and that is what DoI curse do).
> Consider using another method for making a mission challenging.

- [setDisableHpGaugeView](../setdisablehpgaugeview.md), [setDisableSqudHpGaugeView](../setdisablesquadhpgaugeview.md), [setDisableSimpleGaugeView](../setdisablesimplehpgaugeview.md) 
- [setDisableFeverGauge](../setdisablefevergauge.md), [getDisableBeatGuide](../getdisablebeatguide.md), [setDisableBeatGuide](../setdisablebeatguide.md), [setDisableCommandGuide](../setdisablecommandguide.md)
- [getFeverGaugePriority](../getfevergaugepriority.md), [setFeverGaugePriority](../setfevergaugepriority.md)

#### Message / Dialog

- Dialog: [showDialogEx](../showdialogex.md), [closeDialog](../closedialog.md)
- Speech Bubble: [callMessageWindow](../callmessagewindow.md), [callLocalizeMessageWindow](../calllocalizemessagewindow.md), [setMsgWndColor](../setmsgwndcolor.md), [setMsgWndPriority](../setmsgwndpriority.md), [closeMessageWindow](../closemessagewindow.md) [keyCloseMessageWindow](../keyclosemessagewindow.md)
  - Related Guide: [How To: Set Speech Bubble](./how-to-set-speech-bubble.md)
- Information Message (above/below): [callSysMsgLabel](../callsysmsglabel.md), ~~[callSysMsg](../callsysmsg.md)~~, [clearSysMsg](../clearsysmsg.md)
- Chat: [setEnableLogWindow](../setenablelogwindow.md), [setEnableChatWindow](../setenablechatwindow.md)
- Debug: [setChoice](../setchoice.md), [doSelect](../doselect.md)
- Basic text on center : [sysytemMessage](../sysytemmessage.md), [setMessageColor](../setmessagecolor.md), [getLineFeedCount](../getlinefeedcount.md)
- Related Utils: [setReplaceTextFromInt](../setreplacetextfromint.md), [text_setReplaceColor](../text_setreplacecolor.md), [text_setReplaceText](../text_setreplacetext.md)

### Screen

- View: [screenStartFrame](../screenstartframe.md), [screenStartSpotLight](../screenstartspotlight.md)
- Fade: [startFade](../startfade.md), [getFadeRate](../getfaderate.md), [getFadeColor](../getfadecolor.md)

### Timer

*Timer* is the displayed time count on the screen (can be counter or countdown). It is used for e.g. first floor guillotine.

- [startTimer](../starttimer.md), [setTimerPos](../settimerpos.md), [setTimerSize](../settimersize.md), [setTimerEnableSeType](../settimerenablesetype.md), [addTimer](../addtimer.md)
- [getTimerSec](../gettimersec.md), [getCountdonwTimerStatus](../getcountdowntimerstatus.md), [setTimerPause](../settimerpause.md)
- [drawTimer](../drawtimer.md),
  - Related Guide: [How To: Add A Timer](./how-to-add-a-timer.md)

### Screen-World Conversion

- [worldToScreenPos](../worldtoscreenpos.md)

## Script

- [getPack](../getpack_25100600.md)
- [createScript](../createscript_25100800.md), [killScript](../killscript.md), [killChildren](../killchildren.md)

## Hideout

- [getAzitoInfo](../getazitoinfo.md), [setAzitoInfo](../setazitoinfo.md), [setFacilityInfo](../setfacilityinfo.md), [getFacilityGimmickHandle](../getfacilitygimmickhandle.md)
- [setEnablePad](../setenablepad.md)
- [getEventUnitHandle](../geteventunithandle.md), [getMultiHeroHandle](../getmultiherohandle.md)

### Shop

- [unlockShopItem](../unlockshopitem.md), [checkShopItemUnlock](../checkshopitemunlock.md)
- [unlockBgm](../unlockbgm.md), [unlockTeamCard](../unlockteamcard.md), [unlockTeamFlag](../unlockteamflag.md)
- [setShopItemInfo](../setshopiteminfo.md)
- [unlockMedenShopItem](../unlockmedenshopitem.md), [clearMedenShopItem](../clearmedenshopitem.md)

### Save

- [saveMs](../savems.md), [getResultSaveMs](../getresultsavems.md)
- [setIAmCheater](../setiamcheater.md)

### Blacksmith

- [getMaterialItemId](../getmaterialitemid.md), [addLevelUpItemParam](../addlevelupitemparam.md), [getLevelUpInfo](../getlevelupinfo.md)

### World Map

- [addArea](../addarea.md), [addQuest](../addquest.md), [addStage (world map)](../addstage_251c1300.md), [resetStageParam](../resetstageparam.md)
- [isExistDlcQuestFile](../isexistdlcquestfile.md)
- [setStageCursor](../setstagecursor.md)

## Scene

- [changeScene](../changescene.md), [toTilte](../totilte.md)

### Tip screen (labo.pac)

- [clearTipSelectMask](../cleartipsselectmask.md), [resetTips](../resettips.md)
- [unlockTipImageId](../unlocktipsimageid.md), [unlockTipImageNoSave](../unlocktipsimagenosave.md)
- [checkTipsUnlock](../checktipsunlock.md)

## System

- [getLaboInfo](../getlaboinfo.md), [setLaboInfo](../setlaboinfo.md)

### Network

- [setConnectionIconDraw](../setconnectionicondraw.md), [startSyncGameFlag](../startsyncgameflag.md), [getSyncGameFlagResult](../getsyncgameflagresult.md)
- [networkErrorInvoke (Hideout)](../networkerrorinvoke_251c2c00.md), [networkErrorInvoke (Mission)](../networkerrorinvoke_2516e800.md)
- [multi_getTweet](../multi_gettweet.md), [multi_setTweet](../multi_settweet.md), [multi_clearTweet](../multi_cleartweet.md)
- [multi_startGoAhead](../multi_startgoahead.md), [multi_isFinishGoAhead](../multi_isfinishgoahead.md), [multi_stopGoAhead](../multi_stopgoahead.md)