# sendVersus03LastOneGoal

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `sendVersus03LastOneGoal`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 c7 00`
- **Assembly Address in Memory** : `0x89243f4`

## Parameters

- `(int)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 c7 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
sendVersus03LastOneGoal((int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089243f4(int param_1,undefined4 param_2)

{
  int *piVar1;
  int iVar2;
  undefined local_c;
  undefined local_b;
  undefined2 local_a;
  undefined2 local_8;
  undefined2 local_6;
  undefined local_4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x2d8);
  local_c = 10;
  local_6 = 0x106b;
  local_b = 0;
  local_a = 0;
  local_8 = 0;
  if (iVar2 != 0) {
    iVar2 = *(int *)(iVar2 + 0x58);
    if (*(char *)(*piVar1 + iVar2 + 0x48) == '\0') {
      local_4 = *piVar1 != 0;
      FUN_089ef988(iVar2,&local_c);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

