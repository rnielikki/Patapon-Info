# setupDungeonComment

Sets *dungeon info* in floor decision dialog (when finished a floor).

## Code Information

- **Name**: `setupDungeonComment`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 ec 00`
- **Assembly Address in Memory** : `0x8926a78`

## Parameters

- `(int)message_address` *(8 bytes)* : Message ID from **message address table in the PAC file**. Details on: [about message table](./guide/about-message.md#message-table).

## Example

Here is one example in hex:

```25 16 ec 00 / ff ff ff ff```

Which is interpreted as:

```c
setupDungeonComment(0xffffffff)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08926a78(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 uVar2;
  int iVar3;
  int iVar4;
  int iVar5;
  int iVar6;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,0,4);
  iVar6 = *(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2b8) + 0x3c);
  if (iVar6 != 0) {
    iVar5 = *piVar1;
    if (iVar5 < 0) {
      uVar2 = 0;
    }
    else {
      iVar3 = FUN_0883bc1c(param_2);
      iVar4 = Save::Get_Save_BaseAddr(1);
      uVar2 = Message::Get_MsgAddr_With_FullID(iVar4 + 0x98,*(undefined4 *)(iVar3 + iVar5));
    }
    (**(code **)(*(int *)(iVar6 + 4) + 0x48))(iVar6,uVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

