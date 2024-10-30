# cmd_jmp

Starts reading other instruction from the specific address, *instead of* the next instruction.

It is `goto` instruction.

## Code Information

- **Name**: `cmd_jmp`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 02 00`
- **Assembly Address in Memory** : `0x8837960`

## Parameters

- `(Address)address` *(4 bytes)*

The `address` is hex data offset from the **PAC instruction file**.

## Example

Here is one example in hex:

```25 00 02 00 / 14 00 00 00```

Which is interpreted as:

```c
cmd_jmp(0x14)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08837960(undefined4 param_1,undefined4 param_2)

{
  undefined4 *jump_offset;
  
  jump_offset = (undefined4 *)Pac_Get_Param(param_2,0,0,4);
  Param_Print_Type(param_2,0);
  PAC::Cmd_Jump_Or_Call(param_2,*jump_offset,0);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

