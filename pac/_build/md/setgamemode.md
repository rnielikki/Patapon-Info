# setGameMode

Defines mission type.

## Code Information

- **Name**: `setGameMode`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 1d 00`
- **Assembly Address in Memory** : `0x894b204`

## Parameters

- `(int)mission_type` *(8 bytes)* : Mission type to set, details on [getGameMode](./getgamemode.md).

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894b204(undefined4 param_1,undefined4 param_2)

{
  int iVar1;
  undefined4 *puVar2;
  
  iVar1 = Get_Some_Flag(1);
  iVar1 = *(int *)(iVar1 + 0x44);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  *(undefined4 *)(iVar1 + 0x530) = *puVar2;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

