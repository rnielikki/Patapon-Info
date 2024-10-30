# clearSysMsg

Closes the "sysmsg" from [calledSysMsgLabel](./callsysmsglabel.md) or [callSysMsg](./callsysmsg.md).

## Code Information

- **Name**: `clearSysMsg`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 23 00`
- **Assembly Address in Memory** : `0x894b888`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 0a 23 00```

Which is interpreted as:

```c
clearSysMsg()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894b888(int param_1,undefined4 param_2)

{
  if (*(int *)(param_1 + 0x10) != 0) {
    FUN_089cec94(*(undefined4 *)(*(int *)(*(int *)(param_1 + 0x10) + 0x374) + 0x74));
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

