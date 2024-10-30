# sendVersus04RequestWave

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `sendVersus04RequestWave`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 1d 01`
- **Assembly Address in Memory** : `0x892a0fc`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892a0fc(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  undefined local_c;
  undefined local_b;
  undefined2 local_a;
  undefined2 local_8;
  undefined2 local_6;
  undefined4 local_4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x2d8);
  local_c = 0x10;
  local_6 = 0x10cf;
  local_4 = 0xffffffff;
  local_b = 0;
  local_a = 0;
  local_8 = 0;
  if (iVar2 != 0) {
    local_4 = *puVar1;
    FUN_089f014c(*(undefined4 *)(iVar2 + 0x68),&local_c);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

