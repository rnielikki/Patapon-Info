# enumEquipItem

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `enumEquipItem`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 48 00`
- **Assembly Address in Memory** : `0x894d708`

## Parameters

- `(int)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 0a 48 00 / 04 00 00 00 / 05 00 00 00```

Which is interpreted as:

```c
enumEquipItem((int *)iVar5)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894d708(int param_1,undefined4 param_2)

{
  int *piVar1;
  int iVar2;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  if (-1 < *piVar1) {
    iVar2 = FUN_08946440(*(undefined4 *)(*(int *)(*(int *)(param_1 + 0x10) + 0x374) + 0x34));
    *piVar1 = iVar2;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

