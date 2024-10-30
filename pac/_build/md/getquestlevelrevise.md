# getQuestLevelRevise

Gets the actual quest level, set by [setQuestLevelRevise](./setquestlevelrevise.md).

## Code Information

- **Name**: `getQuestLevelRevise`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 a7 00`
- **Assembly Address in Memory** : `0x8922b70`

## Parameters

- `(int *)destination` *(8 bytes)* : Variable to *store* the quest level.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08922b70(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = Get_Some_Flag(1);
  *puVar1 = *(undefined4 *)(*(int *)(iVar2 + 0x44) + 0x558);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

