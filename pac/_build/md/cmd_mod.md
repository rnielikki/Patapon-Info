# cmd_mod

Gets a remainder of a certain value from the another, and stores the result to the first parameter.

## Code Information

- **Name**: `cmd_mod`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 41 00`
- **Assembly Address in Memory** : `0x8837e38`

## Parameters

`cmd_mod((int/float *)target, (int/float)value)`

- `(Int/Float *)target` *(8 bytes)* : This value is for *reading/writing*, and **will be modified**.
- `(Int/Float)value` *(8 bytes)* : Can be variable or immediate value. This value is for *reading*.

This performs `target %= value` (or `target = target % value`). `value` must not be zero.

## Example

Here is one example in hex:

```25 00 41 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 0a 00 00 00```

Which is interpreted as:

```c
cmd_mod((int *)iVar0, (int)10)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08837e38(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  Param_Print_Type(param_2,0);
  Param_Print_Type(param_2,1);
  iVar3 = *piVar2;
  if (iVar3 != 0) {
    if (iVar3 == 0) {
      trap(7);
    }
    *piVar1 = *piVar1 % iVar3;
  }
  Param_Print_Type(param_2,0);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

