# setMaxMissionAreaId

Sets floor amount of the dungeon. This is called very first of the PAC instructions.

For non-dungeon missions, it is always 1.

## Code Information

- **Name**: `setMaxMissionAreaId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 12 03 00`
- **Assembly Address in Memory** : `0x8a1d124`

## Parameters

- `(int)floor_amount` *(8 bytes)* : Floor amount to set.

## Example

Here is one example in hex:

```25 12 03 00 / 02 00 00 00 / 05 00 00 00```

Which is interpreted as:

```c
setMaxMissionAreaId((int)5)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08a1d124(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = Get_Some_Flag(1);
  *(undefined4 *)(*(int *)(iVar2 + 0x44) + 0x544) = *puVar1;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

