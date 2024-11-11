# setQuestLevel

Defines the default level value the whole mission.

Use [setQuestLevelRevise](./setquestlevelrevise.md) for quest scope level.

## Code Information

- **Name**: `setQuestLevel`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 a4 00`
- **Assembly Address in Memory** : `0x8922a50`

## Parameters

- `(int)quest_level` *(8 bytes)* : Quest level to set.

## Example

Here is one example in hex:

```25 16 a4 00 / 08 00 00 00 / 32 00 00 00```

Which is interpreted as:

```c
setQuestLevel(((global)int *)giVar50)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08922a50(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = Get_Some_Flag(1);
  *(undefined4 *)(*(int *)(iVar2 + 0x44) + 0x554) = *puVar1;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

