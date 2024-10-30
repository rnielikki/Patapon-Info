# closeDialog

Closes the dialog. This is called when e.g. going back to the hideout from a mission.

## Code Information

- **Name**: `closeDialog`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 03 0e 00`
- **Assembly Address in Memory** : `0x892dee0`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 03 0e 00```

Which is interpreted as:

```c
closeDialog()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892dee0(int param_1,undefined4 param_2)

{
  undefined4 uVar1;
  int iVar2;
  undefined4 *puVar3;
  
  if (*(int *)(param_1 + 0x1c) == 0) {
    PAC::PAC_setCmdId(param_2,0);
  }
  else {
    puVar3 = (undefined4 *)(param_1 + 0x1c);
    uVar1 = FUN_08a1ee38(*(int *)(param_1 + 0x1c));
    FUN_08a1ee40(*puVar3);
    iVar2 = Get_addr_0xd20_Data(uVar1);
    if (iVar2 != 0) {
      FUN_08a1edb8(*puVar3,0,0xffffffff,0);
      FUN_08a1ee08(*puVar3);
      FUN_08a1eca8(*puVar3,0x50);
    }
    PAC::PAC_setCmdId(param_2,0);
  }
  return;
}
```

