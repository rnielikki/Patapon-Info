# appearItem

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `appearItem`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 46 00`
- **Assembly Address in Memory** : `0x8915bfc`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 17 46 00 / 04 00 00 00 / 14 00 00 00 / 20 00 00 00 / 00 00 00 00 / 20 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
appearItem((int *)iVar20, (float *)fVar0, (float *)fVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08915bfc(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  undefined4 local_10;
  undefined4 local_c;
  undefined4 local_8;
  undefined4 local_4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  if ((*piVar1 != -1) && (iVar4 = FUN_08910c4c(param_1), iVar4 != 0)) {
    local_c = *puVar3;
    local_10 = *puVar2;
    local_4 = 0x3f800000;
    local_8 = 0;
    FUN_0896e240(iVar4,1,&local_10);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

