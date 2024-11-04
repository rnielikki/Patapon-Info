# multi_startNosyncEvent

> [!CAUTION]
> DO NOT SPEED UP IN MULTI even if this is called. It still causes desync (best seen in custcene).
> The real 'speedup allowed' part (e.g. chest open scene) doesn't call this.

Indicates this event is not synced, e.g. tips and event scenes. This state will continue until [multi_endOfSyncEvent](./multi_endnosyncevent.md) is called.

## Code Information

- **Name**: `multi_startNosyncEvent`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 e3 00`
- **Assembly Address in Memory** : `0x891b4ec`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 16 e3 00```

Which is interpreted as:

```c
multi_startNosyncEvent()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891b4ec(undefined4 param_1,undefined4 param_2)

{
  undefined4 uVar1;
  int iVar2;
  
  uVar1 = Save::Get_Save_BaseAddr(1);
  iVar2 = Save::Get_BaseAddr__0x78(uVar1,1);
  iVar2 = *(int *)(iVar2 + 100);
  if (*(char *)(iVar2 + 0xa7) == '\0') {
    if (*(char *)(iVar2 + 0xa6) == '\0') {
      *(undefined *)(iVar2 + 0xa6) = 1;
      uVar1 = Save::Get_Save_BaseAddr();
      iVar2 = Save::Get_BaseAddr__0x78(uVar1,1);
      uVar1 = zero_if_08aabe38_is_zero(1);
      FUN_0886cff8(uVar1,*(undefined4 *)(*(int *)(iVar2 + 0x44) + 0x784));
      PAC::PAC_setCmdId(param_2,0);
    }
    else {
      PAC::PAC_setCmdId(param_2,0);
    }
  }
  else {
    PAC::PAC_setCmdId(param_2,0);
  }
  return;
}
```

