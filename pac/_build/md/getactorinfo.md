# getActorInfo

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getActorInfo`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 04 00`
- **Assembly Address in Memory** : `0x8910ebc`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(uint)Var1` *(8 bytes)*
- `(Undefined)Var2` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08910ebc(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  uint *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  Pac_Get_Param(param_2,2,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  if ((iVar3 != 0) && (*puVar2 == 0)) {
    *puVar2 = ((uint)*(byte *)(iVar3 + 0x8c) << 0x1e) >> 0x1f;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

