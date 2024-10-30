# sendVersus02CommonData

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `sendVersus02CommonData`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 27 01`
- **Assembly Address in Memory** : `0x8927968`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 27 01 / 02 00 00 00 / 01 00 00 00 / 04 00 00 00 / 0a 00 00 00 / 04 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
sendVersus02CommonData((int)1, (int *)iVar10, (int *)iVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08927968(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  undefined local_10;
  undefined local_f;
  undefined2 local_e;
  undefined2 local_c;
  undefined2 local_a;
  undefined2 local_8;
  undefined2 local_6;
  undefined4 local_4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = *(int *)(*(int *)(param_1 + 0x10) + 0x2d8);
  local_10 = 0x10;
  local_a = 0x1007;
  local_f = 0;
  local_e = 0;
  local_c = 0;
  if (iVar4 != 0) {
    local_8 = (undefined2)*puVar1;
    local_6 = (undefined2)*puVar2;
    local_4 = *puVar3;
    FUN_089cdacc(*(undefined4 *)(iVar4 + 0x48),&local_10);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

