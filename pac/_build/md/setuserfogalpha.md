# setUserFogAlpha

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setUserFogAlpha`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 63 00`
- **Assembly Address in Memory** : `0x8918028`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(float)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 17 63 00 / 04 00 00 00 / 36 00 00 00 / 10 00 00 00 / 00 00 80 bf / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setUserFogAlpha((int *)iVar54, (float)-1, (float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08918028(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  float *pfVar3;
  int iVar4;
  int iVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  pfVar3 = (float *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
  if (iVar4 == 0) {
    iVar4 = 0;
  }
  if ((iVar4 != 0) && (iVar5 = (**(code **)(*(int *)(iVar4 + 4) + 0x34))(iVar4), iVar5 == 9)) {
    FUN_088c26ac(*puVar2,*pfVar3 * 30.0,0xbf800000,iVar4);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

