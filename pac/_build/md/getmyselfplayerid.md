# getMyselfPlayerId

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getMyselfPlayerId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 0c 01`
- **Assembly Address in Memory** : `0x8928b00`

## Parameters

- `(int)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 0c 01 / 04 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
getMyselfPlayerId((int *)iVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08928b00(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  int iVar2;
  int *piVar3;
  int local_4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  *piVar1 = 0;
  iVar2 = Get_Some_Flag(1);
  if (*(int *)(iVar2 + 0x44) != 0) {
    local_4 = *(int *)(*(int *)(iVar2 + 0x44) + 0x28);
    if (DAT_08a70bc0 < local_4) {
      piVar3 = &local_4;
    }
    else {
      piVar3 = &DAT_08a70bc0;
    }
    *piVar1 = *piVar3;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

