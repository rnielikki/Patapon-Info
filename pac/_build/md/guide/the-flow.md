# The Flow

> See also: [How To: Define a Mission](./how-to-define-a-mission.md)

> [!CAUTION]
> This article exists for understanding the PAC instruction.
> **Do not** write the PAC instruction from bottom. There are many unknown logics e.g. bunch of unknown flags and creating it from bottom might break the game.

## Warmup

- Set Mission Data
    - [setMaxMissionAreaId](../setmaxmissionareaid.md)
    - [setMissionAreaId](../setmissionareaid.md)
    - [setQuestLevelRevise](../setquestlevelrevise.md)
    - [setQuestPayExp](../setquestpayexp.md)
    - [setQuestPayItem](../setquestpayitem.md)
- Set logic when misison is done ([item drop](../resultboxitemlabel.md), [levelup](../resultlevelupcalaclabel.md))
- Call [setMissionTimmingScript](../setmissiontimmingscript.md) (usually 0, 1, 2)
- Finish with [cmd_end](../cmd_end.md)

## MissionTimmingScript

Related article: [setMissionTimmingScript](../setmissiontimmingscript.md)

### MissionTimmingScript 0
   - [readArcFile](../readarcfile.md), and THEN [requestActor](../requestactor.md) if needed.
### MissionTimmingScript 1
   - [Define item drop during mission](./how-to-set-item-drops.md)
   - [Create Entities](./how-to-create-an-enemy-target.md)
### MissionTimmingScript2
   - Rest of the in-mission logic