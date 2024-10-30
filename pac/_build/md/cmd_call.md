# cmd_call

Go to the other instruction (like [cmd_jmp](./cmd_jmp.md)), and **go back** to keep executing the next instruction, if the jumped instruction meets the end (through [cmd_end](./cmd_end.md)).

It is like **calling a function** in programming.

## Code Information

- **Name**: `cmd_call`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 03 00`
- **Assembly Address in Memory** : `0x88379c8`

## Parameters

- `(Address)address` *(4 bytes)* 

The `address` is hex data offset from the **PAC instruction file**.

## Example

Here is one example in hex:

```25 00 03 00 / 10 03 00 00```

Which is interpreted as:

```c
cmd_call(0x310)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_088379c8(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,0,4);
  Param_Print_Type(param_2,0);
  Set_ReturnContext(param_2);
  PAC::Cmd_Jump_Or_Call(param_2,*puVar1,0);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

