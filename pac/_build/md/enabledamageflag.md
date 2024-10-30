# enableDamageFlag

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `enableDamageFlag`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 6d 00`
- **Assembly Address in Memory** : `0x8918910`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 17 6d 00 / 04 00 00 00 / 14 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
enableDamageFlag((int *)iVar20, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08918910(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  int iVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  if (*piVar1 != -1) {
    iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    if ((iVar3 != 0) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 - 9U < 2))
    {
      *(bool *)(*(int *)(iVar3 + 0xcc) + 0xf) = *piVar2 == 0;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

