# setConnectionIconDraw

Enables or disables the connecting icon (e.g. while joining other's hideout)

## Code Information

- **Name**: `setConnectionIconDraw`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 2f 00`
- **Assembly Address in Memory** : `0x8b501e8`

## Parameters

- `(bool)enabled` *(8 bytes)* : 1 enables the connection icon, 0 deletes the icon.

## Example

Here is one example in hex:

```25 1c 2f 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
setConnectionIconDraw((int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b501e8(int param_1,undefined4 param_2)

{
  int *piVar1;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  FUN_Azito__08acbeb8(*(undefined4 *)(*(int *)(param_1 + 0x10) + 500),*piVar1 != 0);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

