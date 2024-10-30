# cmd_iand

Performs and (&) operation to the another, and stores the added value to the first parameter.

## Code Information

- **Name**: `cmd_iand`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 12 00`
- **Assembly Address in Memory** : `0x883867c`

## Parameters

`cmd_iand((uint *)target, (uint)value)`

- `(uint *)target` *(8 bytes)* : This value is for *reading/writing*, and **will be modified**.
- `(uint)value` *(8 bytes)* : This value is for *reading*.

This performs `target &= value` (or `target = target & value`).

## Example

Here is one example in hex:

```25 00 12 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 07 00 00 00```

Which is interpreted as:

```c
cmd_iand((int *)iVar0, (int)7)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883867c(undefined4 param_1,undefined4 param_2)

{
  uint *puVar1;
  uint *puVar2;
  
  puVar1 = (uint *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  *puVar1 = *puVar1 & *puVar2;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

