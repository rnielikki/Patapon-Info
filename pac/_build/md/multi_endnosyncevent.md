# multi_endNosyncEvent

Indicates [no-sync event](./multi_startnosyncevent.md) has ended and sync is required now.

## Code Information

- **Name**: `multi_endNosyncEvent`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 e4 00`
- **Assembly Address in Memory** : `0x891b5a4`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 16 e4 00```

Which is interpreted as:

```c
multi_endNosyncEvent()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891b5a4(undefined4 param_1,undefined4 param_2)

{
  undefined4 uVar1;
  int iVar2;
  
  uVar1 = Save::Get_Save_BaseAddr(1);
  iVar2 = Save::Get_BaseAddr__0x78(uVar1,1);
  if (*(char *)(*(int *)(iVar2 + 100) + 0xa7) == '\0') {
    *(undefined *)(*(int *)(iVar2 + 100) + 0xa6) = 0;
    PAC::PAC_setCmdId(param_2,0);
  }
  else {
    PAC::PAC_setCmdId(param_2,0);
  }
  return;
}
```

