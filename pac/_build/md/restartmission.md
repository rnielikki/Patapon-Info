# restartMission

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `restartMission`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 12 05 00`
- **Assembly Address in Memory** : `0x8a1d1e4`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 12 05 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
restartMission((int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08a1d1e4(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = Get_Some_Flag(1);
  *(undefined4 *)(*(int *)(iVar2 + 0x44) + 0x540) = *puVar1;
  *(undefined *)(*(int *)(param_1 + 0x10) + 0x14a0) = 1;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

