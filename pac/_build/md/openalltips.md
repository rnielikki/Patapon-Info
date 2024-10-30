# openAllTips

Unlocks all tips. This exists for debugging purpose.

## Code Information

- **Name**: `openAllTips`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 2b 00`
- **Assembly Address in Memory** : `0x8b4ffd8`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 1c 2b 00```

Which is interpreted as:

```c
openAllTips()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4ffd8(undefined4 param_1,undefined4 param_2)

{
  int iVar1;
  
  iVar1 = Save::Get_Save_BaseAddr(1);
  Syscall::Kernel::Kernel_Memset(*(int *)(iVar1 + 0x50) + 0x2b808,0xffffffff,0x10);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

