# getLinefeedCount

Gets lines of the message, possibly from [sysytemMessage](./sysytemmessage.md)

## Code Information

- **Name**: `getLinefeedCount`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 03 11 00`
- **Assembly Address in Memory** : `0x892e268`

## Parameters

- `(uint *)lines` *(8 bytes)* : Variable to *store* the line amount of the message.

## Example

Here is one example in hex:

```25 03 11 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getLinefeedCount((int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892e268(int param_1,undefined4 param_2)

{
  uint *puVar1;
  uint uVar2;
  
  puVar1 = (uint *)Pac_Get_Param(param_2,0,1,4);
  *puVar1 = 0;
  if (*(int *)(param_1 + 0x2c) != 0) {
    uVar2 = (**(code **)(**(int **)(*(int *)(param_1 + 0x2c) + 0x150) + 0x94))();
    *puVar1 = (uVar2 & 0xff) - 1 & 0xff;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

