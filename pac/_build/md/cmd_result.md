# cmd_result

Assign the given value to the special "result" variable.

The "result" value is only used as a condition for jumping([cmd_resJmp](./cmd_resjmp.md)) or calling([cmd_resCall](./cmd_rescall.md)) function.

## Code Information

- **Name**: `cmd_result`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 04 00`
- **Assembly Address in Memory** : `0x8837a38`

## Parameters

- `(bool)value` *(8 bytes)* : Zero or one, Value to assign to the "result" variable.

## Example

Here is one example in hex:

```25 00 04 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
cmd_result((int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08837a38(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  Param_Print_Type(param_2,0);
  Set_Result(param_2,*piVar1 != 0);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

