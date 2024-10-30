# getFacilityHandle

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getFacilityHandle`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 08 00`
- **Assembly Address in Memory** : `0x8b4d998`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4d998(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  if ((*(int *)(param_1 + 0x10) != 0) &&
     (iVar3 = *(int *)(*piVar2 * 0x10 + *(int *)(*(int *)(param_1 + 0x10) + 0x1c4) + 0x1e0),
     iVar3 != 0)) {
    iVar3 = (int)*(short *)(iVar3 + 0x78);
    *piVar1 = iVar3;
    Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0x194),iVar3,1);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

