# setQuestLevelRevise

Defines the level of the whole mission. This affects every enemy stat.

See also: [About Levels](./guide/about-levels.md).

## Code Information

- **Name**: `setQuestLevelRevise`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 a6 00`
- **Assembly Address in Memory** : `0x8922b10`

## Parameters

- `(int)quest_level` *(8 bytes)* : Quest level to set. If this is zero, level from [setQuestLevel](./setquestlevel.md) will be used instead.

## Example

Here is one example in hex:

```25 16 a6 00 / 08 00 00 00 / 33 00 00 00```

Which is interpreted as:

```c
setQuestLevelRevise(((global)int *)giVar51)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08922b10(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = Get_Some_Flag(1);
  *(undefined4 *)(*(int *)(iVar2 + 0x44) + 0x558) = *puVar1;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```
